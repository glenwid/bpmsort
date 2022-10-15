<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\Models\Artist;

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
        'master_id',
        'discogs_id'
    ];

    public function artist() {
        return $this->belongsToMany(Artist::class, 'record_artist', 'artist_id', 'record_id');
    }
}
