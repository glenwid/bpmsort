<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiscogsController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\EnsureDiscogsConnection;

Route::group(['middleware' => EnsureDiscogsConnection::class], function () {
    Route::get('/', [DashboardController::class, 'index']);
    Route::get('/pull', [DiscogsController::class, 'pullUserCollection']);
});

