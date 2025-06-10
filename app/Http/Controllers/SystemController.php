<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateSystemRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\System;
use App\Models\Record;
use App\Models\Track;

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

    public function sync(Request $request) {
        return Inertia::render('System/Sync', [
            'records' => Record::all(), 
            'tracks' => Track::all(), 
            'success' => session('success'),
            'error' => session('error'), 
        ]);
    }

    public function update(UpdateSystemRequest $request) {
        $validatedData = $request->validated(); 
        System::setDiscogsUsername($validatedData['discogs_username']);
        System::setDiscogsToken($validatedData['discogs_token']);

        return back()->with('success', 'Settings updated.');
    }
}
