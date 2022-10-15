<?php

namespace App\Models\Relations;
use Illuminate\Database\Eloquent\Model;

class RecordTrack extends Model
{
    protected $table = 'record_track';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'record_id',
        'track_id',
    ];
}
