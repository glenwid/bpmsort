<?php

use App\Models\Artist;
use App\Models\Record;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('artist_record', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            
            $table->foreignIdFor(Record::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Artist::class)->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('record_artist');
    }
};
