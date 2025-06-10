<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use Inertia\Inertia;
use App\Models\Record;
use App\Models\Track;

class DashboardController extends BaseController
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'records' => Record::with('artists')->get(),
            'tracks' => Track::all(), 
            'success' => session('success'), 
            'errors' => session('errors'), 
        ]);
    }
}