<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Spotify;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class SpotifyController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function getTracksBpm() {
        $records = Record::all();

        foreach($records as $record) {
            $tracks = $record->tracks;
            $artists = '';

            foreach($record->artists as $artist) {
                $artists = $artists . $artist->name . ' ';
            }

            foreach($tracks as $track) {
                # TODO: improve selection of search results
                if(!$track->bpm) {
                    $trackQuery = Spotify::searchTracks($track->title . ' ' . $artists)->limit(5)->get();
                    if(array_key_exists(0, $trackQuery['tracks']['items'])) {
                        $spotifyTrackId = $trackQuery['tracks']['items'][0]['id'];
                        $analysis = Spotify::audioAnalysisForTrack($spotifyTrackId)->get();

                        $track->update([
                            'bpm' => $analysis['track']['tempo'],
                            'duration' => $analysis['track']['duration']
                        ]);
                        $track->save();
                    }
                }

            }
        }
    }
}
