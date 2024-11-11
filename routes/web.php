<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DiscogsController;

Route::get('/', function () {
    return Inertia::render('Dashboard', []);
});

Route::get('/pull', [DiscogsController::class, 'pullUserCollection']);