<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    protected $fillable = [
        'title',
        'duration',
        'bpm',
        'record_id',
        'spotify_id',
        'precision'
    ];

    public function record()
    {
        return $this->belongsTo(Record::class);
    }
}
