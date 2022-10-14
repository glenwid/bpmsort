<?php

namespace App\Models;

class Artist
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'master_id',
    ];
}
