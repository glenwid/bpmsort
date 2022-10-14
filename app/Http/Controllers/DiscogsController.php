<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class DiscogsController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getCollection($username) {
        # https://api.discogs.com/users/gitarristisch/collection/folders/0/releases
        # implement pagination
        # save to db
    }

    public function getTracks() {
        # https://api.discogs.com/masters/38405
        # for each record get tracks and save them to the db
        # link them with the record
    }
}

# TODO: create migrations for relations
# TODO: create models
