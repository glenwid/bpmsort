<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiscogsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SystemController;
use App\Http\Middleware\EnsureDiscogsConnection;
use App\Http\Controllers\RecordsController;
use App\Http\Controllers\ArtistController;

Route::group(['middleware' => EnsureDiscogsConnection::class], function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/records/sync', [DiscogsController::class, 'pullUserCollection'])->name('records.sync');
    Route::post('/tracks/sync', [DiscogsController::class, 'pullTracks'])->name('tracks.sync');

    Route::get('/records', [RecordsController::class, 'index'])->name('records.index');
    Route::get('/records/{record}', [RecordsController::class, 'show'])->name('records.show');

    Route::get('/artists/{artist}', [ArtistController::class, 'show'])->name('artists.show');

    Route::get('/system/sync', [SystemController::class, 'sync'])->name('system.sync');
});

Route::get('/system', [SystemController::class, 'index'])->name('system');
Route::put('/system', [SystemController::class, 'update'])->name('system.update');