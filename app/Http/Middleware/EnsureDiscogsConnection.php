<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\System;

class EnsureDiscogsConnection
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        # redirect to system settings if discogs data is not set
        $system = System::getInstance();
        if($system->discogs_token === null) {
            return redirect(route('system'))->with('error', 'Discogs token and username not set');
        }

        return $next($request);
    }
}
