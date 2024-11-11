<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = [
        'name',
        'discogs_id',
    ];

    /**
     * Relations
     */
    public function records()
    {
        return $this->belongsToMany(Record::class);
    }
}
