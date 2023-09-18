<?php

namespace App\Models\Relations;
use Illuminate\Database\Eloquent\Model;

class RecordArtists extends Model
{
    protected $tableName = 'record_artists';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'record_id',
        'artist_id'
    ];
}
