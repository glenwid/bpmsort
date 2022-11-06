<?php

namespace App\Models\Relations;
use Illuminate\Database\Eloquent\Model;

class TrackArtists extends Model
{
    protected $tableName = 'track_artists';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'track_id',
        'artist_id'
    ];
}
