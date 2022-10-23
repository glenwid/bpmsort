<?php

use App\Http\Controllers\DiscogsController;
use App\Http\Controllers\SpotifyController;

use App\Models\Record;
use App\Models\Track;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/discogs/collection/{username}', [DiscogsController::class, 'pullUserCollection']);

Route::get('/discogs/tracks', [DiscogsController::class, 'pullTracks']);

Route::get('/spotify/tracks', [SpotifyController::class, 'getTracksBpm']);

Route::get('/test', function(Request $request) {
    return response('test');
});
