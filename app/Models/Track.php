<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    protected $table = 'tracks';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'duration',
        'position',
        'bpm',
        'record_id',
        'spotify_id',
        'precision'
    ];

    public function record() {
        return $this->belongsTo(Record::class);
    }
}
