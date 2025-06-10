<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtistController extends Controller
{
    public function show(Request $request, Artist $artist) {
        return Inertia::render('Artists/Show', [
            'artist' => $artist->load('records'),
            'success' => session('success'), 
            'errors' => session('errors'), 
        ]);
    }
}
