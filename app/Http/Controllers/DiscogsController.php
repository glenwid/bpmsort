<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Record;
use App\Models\Relations\RecordArtists;
use App\Models\Track;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class DiscogsController extends BaseController {
    # using data from a discogs pull collection request
    # transfer every new record and artist to the db
    public function scrapeData($records) {
        foreach($records as $record) {

            # we shouldn't do anything if record already exists
            if(Record::where('discogs_id', $record->id)->exists()) {
                continue;
            }

            # record is new, use data from discogs 
            $newRecord = Record::create([
                'discogs_id' => $record->id,
                'discogs_master_id' => $record->basic_information->master_id,
                'title' => $record->basic_information->title,
                'thumb' => $record->basic_information->thumb,
                'cover_image' => $record->basic_information->cover_image,
            ]);

            # now let's go check if any new artists need to be added
            foreach($record->basic_information->artists as $incomingArtist) {

                $artist = Artist::where('discogs_id', $incomingArtist->id)->first();
                
                # artist is new, add to db
                if(!isset($artist)) {
                    $artist = Artist::create([
                        'discogs_id' => $incomingArtist->id,
                        'name' => $incomingArtist->name,
                    ]);
                }

                # relate artist to record
                $newRecord->artists()->syncWithoutDetaching($artist->id);
            }
        }
    }

    public function pullUserCollection() {
        $username = env('DISCOGS_USERNAME');
        # get all records of a queried user's collection from discogs
        $response = Http::get('https://api.discogs.com/users/'. $username .'/collection/folders/0/releases', [
            'token' => env('DISCOGS_TOKEN')
        ]);

        $response = json_decode($response);

        $counter = 1;
        while(property_exists($response->pagination->urls, 'next')) {

            # detect if record's of current page need to be added to the db
            $records = $response->releases;
            $this->scrapeData($records);

            # go to next page
            $counter++;
            $response = json_Decode(Http::get($response->pagination->urls->next));
        }

        return response('Successfully pulled collection from discogs.', 200);
    }

    # https://api.discogs.com/releases/{id}
    # get track data for synced records
    public function pullTracks() {
        $rateLimit = 60;
        $index = 0;
        $counter = 0;

        $records = Record::all();

        $records->foreach(function($record) use (&$counter, &$rateLimit) {
            # have a little sleep if we have hit the rate limit 🛌🏻💤
            if($counter == $rateLimit) {
                Log::info('Ratelimit hit 💥');
                sleep(60);
            }

            # no tracks in a record shows a missing sync, let's fix that
            if($record->tracks->count() == 0) {

                # lets look this record up on discogs 🤓
                # TODO: add unique user agent header to request so discogs will trust us
                $response = Http::get('https://api.discogs.com/releases/'. $record->discogs_id, [
                    'token' => env('DISCOGS_TOKEN')
                ]);

                # staying respectful to discogs, let's keep track of our current rate limit
                $rateLimit = $response->header('X-Discogs-Ratelimit');
                $counter = $response->header('X-Discogs-Ratelimit-Used');

                $body = json_decode($response->body());
                if(property_exists($body, 'tracklist')) {
                    $tracks = $body->tracklist;

                    # make sure all the queried record's tracks are added to the db
                    foreach($tracks as $track) {
                        Track::create([
                            'title' => $track->title,
                            'duration' => $track->duration,
                            'position' => $track->position,
                            'record_id' => $record->id
                        ]);
                    }
                }
            }
        });

        return response('All records synced.');
    }
}
