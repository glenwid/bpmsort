<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    protected $fillable = [
        'discogs_id',
        'discogs_master_id',
        'title',
        'thumb',
        'cover_image',
    ];

    /**
     * Relations
     */
    public function artists()
    {
        return $this->belongsToMany(Artist::class);
    }

    public function tracks()
    {
        return $this->hasMany(Track::class);
    }
}
