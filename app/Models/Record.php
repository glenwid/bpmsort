<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\Models\Artist;
use App\Models\Track;

class Record extends Model
{
    protected $primaryKey = 'record_id';
    protected $table = 'records';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'discogs_master_id',
        'discogs_id'
    ];

    public function artists() {
        return $this->belongsToMany(Artist::class, 'record_artist', 'artist_id', 'record_id');
    }

    public function tracks() {
        return $this->belongsToMany(Track::class, 'record_track', 'record_id', 'track_id');
    }

    public function isLinkedTo($trackId) {
        return in_array($trackId, $this->tracks->pluck('track_id')); 
    }
}
