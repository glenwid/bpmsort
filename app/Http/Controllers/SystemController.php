<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\System;

class SystemController extends Controller
{
    public function index(Request $request) {
        
        return Inertia::render('System/Edit', [
            'discogs_username' => System::discogsUsername(),
            'discogs_token' => System::discogsToken(),
            'success' => session('success'),
            'error' => session('error'), 
        ]);
    }
}
