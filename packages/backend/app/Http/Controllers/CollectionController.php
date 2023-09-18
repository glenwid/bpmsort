<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Illuminate\Routing\Controller as BaseController;

class CollectionController extends BaseController {
    public function getCollection() {
        return response()->json(Record::all(), 200);
    }
}
