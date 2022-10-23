<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $primaryKey = 'artist_id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'discogs_id'
    ];
}
