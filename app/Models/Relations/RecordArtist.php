<?php

namespace App\Models\Relations;
use Illuminate\Database\Eloquent\Model;

class RecordArtist extends Model
{
    protected $table = 'record_artist';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'record_id',
        'artist_id',
    ];
}
