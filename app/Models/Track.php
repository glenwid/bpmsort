<?php

namespace App\Models;

class Track
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'master_id',
    ];
}
