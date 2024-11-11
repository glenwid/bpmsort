<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use Inertia\Inertia;
use App\Models\Record;

class DashboardController extends BaseController
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'records' => Record::all(),
        ]);
    }
}