<?php

namespace App\Models;

class Record
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'duration',
        'position',
        'bpm'
    ];
}
