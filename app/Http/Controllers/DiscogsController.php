<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Record;
use App\Models\Relations\RecordArtist;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;

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

    public function getTracks() {
        # https://api.discogs.com/masters/38405
        # for each record get tracks and save them to the db
        # link them with the record
    }
}

# TODO: create migrations for relations
# TODO: create models
