<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SystemController extends Controller
{
    public function edit(Request $request) {
        return Inertia::render('System/Edit', [
            'error' => session('error'), 
        ]);
    }
}
