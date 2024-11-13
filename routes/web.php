<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiscogsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SystemController;
use App\Http\Middleware\EnsureDiscogsConnection;

Route::group(['middleware' => EnsureDiscogsConnection::class], function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/records/sync', [DiscogsController::class, 'pullUserCollection'])->name('records.sync');
    Route::post('/tracks/sync', [DiscogsController::class, 'pullTracks'])->name('tracks.sync');
});

Route::get('/system', [SystemController::class, 'index'])->name('system');
Route::put('/system', [SystemController::class, 'update'])->name('system.update');