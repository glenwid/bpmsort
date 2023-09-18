<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\Models\Artist;
use App\Models\Track;

class Record extends Model
{
    protected $table = 'records';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'thumb',
        'cover_image',
        'discogs_master_id',
        'discogs_id',
        'artist_id',
    ];

    protected $with = [
        'artists',
    ];

    public function artists() {
        return $this->belongsToMany(Artist::class, 'record_artists');
    }

    public function tracks() {
        return $this->hasMany(Track::class);
    }
}
