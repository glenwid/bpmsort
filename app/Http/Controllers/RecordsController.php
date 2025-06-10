<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use Inertia\Inertia;
use App\Models\Record;
use Illuminate\Http\Request;

class RecordsController extends BaseController
{
    public function index(Request $request) {
        $pageSize = 30; 

        $query = Record::with('artists');
        $pagination = $query->paginate($pageSize);

        return Inertia::render('Records/Index', [
            'records' => $pagination->items(),
            'pageSize' => $pageSize,
            'total' => $pagination->total(),
            'currentPage' => $pagination->currentPage(),
            'hasMorePages' => $pagination->hasMorePages(),
            'success' => session('success'), 
            'errors' => session('errors'), 
        ]);
    }

    public function show(Request $request, Record $record) {
        return Inertia::render('Records/Show', [
            'record' => $record->load('artists', 'tracks'),
            'success' => session('success'), 
            'errors' => session('errors'), 
        ]);
    }
}