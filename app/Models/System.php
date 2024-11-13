<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class System extends Model
{
    protected $fillable = [
        'discogs_username',
        'discogs_token',
    ];

    private static $instance = null;

    # protected to prevent instantiation from outside this class
    protected function __construct() {}

    protected function __clone() {}

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new static(); 
        }

        return self::$instance->first();
    }

    public static function discogsUsername()
    {
        return self::getInstance()->discogs_username;
    }

    public static function discogsToken()
    {
        return self::getInstance()->discogs_token;
    }

    public static function setDiscogsUsername($username)
    {
        self::getInstance()->update(['discogs_username' => $username]);
    }

    public static function setDiscogsToken($token)
    {
        self::getInstance()->update(['discogs_token' => $token]);
    }
}
