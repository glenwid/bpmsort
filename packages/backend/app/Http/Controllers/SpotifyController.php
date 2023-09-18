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
                if(!$track->bpm) {
                    $trackQuery = Spotify::searchTracks($track->title . ' ' . $artists)->limit(5)->get();
                    if(array_key_exists(0, $trackQuery['tracks']['items'])) {

                        $bestMatch = $this->pickSearchResult($trackQuery, $track, $artists);
                        $spotifyTrackId = $trackQuery['tracks']['items'][$bestMatch['index']]['id'];
                        $analysis = Spotify::audioAnalysisForTrack($spotifyTrackId)->get();

                        $track->update([
                            'bpm' => $analysis['track']['tempo'],
                            'spotify_id' => $spotifyTrackId,
                            'precision' => $bestMatch['precision']
                        ]);
                        $track->save();
                    }
                }

            }
        }

        return response('Pulled all bpm values.');
    }

    public function pickSearchResult($query, $track, $artists) {
        $tracks = $query['tracks']['items'];

        $analysis = [];
        if(count($tracks) > 0) {
            foreach($tracks as $queriedTrack) {
                $albumName = $queriedTrack['album']['name'];
                $artistNames = '';

                foreach($queriedTrack['artists'] as $entry) {
                    $artistNames .= $entry['name'] . ' ';
                }

                $trackName = $queriedTrack['name'];

                $simliarityByCategory = [
                    'albumName' => similar_text($albumName, $track->record->title),
                    'artistName' => similar_text($artistNames, $artists),
                    'trackName' => similar_text($trackName, $track->title)
                ];

                array_push($analysis, $simliarityByCategory);

            }
        }

        $precisions = [];
        foreach($analysis as $item) {
            $precision = ($item['albumName'] * 0.25) + ($item['artistName'] * 0.25) + ($item['trackName'] * 0.5);
            array_push($precisions, $precision);
        }

        $bestPrecision = max($precisions);

        return [
            'index' => array_keys($precisions, $bestPrecision)[0],
            'precision' => $bestPrecision,
        ];
    }
}
