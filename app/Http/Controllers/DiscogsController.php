<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Record;
use App\Models\Relations\RecordArtist;
use App\Models\Relations\RecordTrack;
use App\Models\Track;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class DiscogsController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function pullUserCollection($username) {

        # get all records of a queried user's collection from discogs
        $response = Http::get('https://api.discogs.com/users/'. $username .'/collection/folders/0/releases', [
            'token' => env('DISCOGS_TOKEN')
        ]);

        $response = json_decode($response);

        $counter = 1;
        while(property_exists($response->pagination->urls, 'next')) {

            $records = $response->releases;
            foreach($records as $record) {

                # check if the current record already exists
                if(!Record::where('discogs_id', $record->id)->exists()) {

                    # use data from discogs to create new record
                    $newRecord = Record::create([
                        'discogs_id' => $record->id,
                        'discogs_master_id' => $record->basic_information->master_id,
                        'title' => $record->basic_information->title,
                    ]);

                    foreach($record->basic_information->artists as $artist) {

                        # check if the record's artist currently active in the loop exists in db
                        if(!Artist::where('discogs_id', $artist->id)->exists()) {

                            # use data from discogs to create artist
                            Artist::create([
                                'name' => $artist->name,
                                'discogs_id' => $artist->id,
                            ]);
                        }

                        # link artist with the record
                        RecordArtist::create([
                            'record_id' => $newRecord->getKey(),
                            'artist_id' => Artist::where('discogs_id', $artist->id)->first()->artist_id
                        ]);
                    }
                }
            }

            # go to next page
            $counter++;
            $response = json_Decode(Http::get($response->pagination->urls->next));
        }

        return response('Successfully pulled collection from discogs.', 200);
    }

    public function pullTracks() {
        # https://api.discogs.com/releases/{id}
        # for each record get tracks and save them to the db
        # link them with the record

        $rateLimit = 50;
        $index = 0;
        $counter = 0;

        do {
            $records = Record::all();

            # oh no, we hit Discog's rate limit! 🛌🏻💤
            if($counter == $rateLimit) {
                Log::info('Ratelimit hit 💥');
                sleep(60);
            }

            # check if the currently selected record has any synced tracks
            $record = $records[$index];
            if(Record::find($record->record_id)->tracks->count() == 0) {

                # lets look this record up on discogs 🤓
                # TODO: add unique user agent header to request so discogs will trust us
                $response = Http::get('https://api.discogs.com/releases/'. $record->discogs_id, [
                    'token' => env('DISCOGS_TOKEN')
                ]);

                # staying respectful to discogs
                $rateLimit = $response->header('X-Discogs-Ratelimit');
                $counter = $response->header('X-Discogs-Ratelimit-Used');

                $body = json_decode($response->body());
                if(property_exists($body, 'tracklist')) {
                    $tracks = $body->tracklist;

                    # make sure all the queried record's tracks are added to the db
                    foreach($tracks as $track) {

                        # prevent duplicates
                        # TODO: check with $record->isLinkedTo()
                        if(!Track::where([
                            'title' => $track->title,
                            'duration' => $track->duration
                            ])->exists()) {
                                $arrival = Track::create([
                                    'title' => $track->title,
                                    'duration' => $track->duration,
                                    'position' => $track->position,
                                    'bpm' => 420,
                                ]);

                                # link it with the record
                                RecordTrack::create([
                                    'track_id' => $arrival->track_id,
                                    'record_id' => $record->record_id,
                                ]);
                        }
                    }
                }
            }

            $index++;
        } while (Record::all()->count() > $index);

        return response('All records synced.');
    }
}
