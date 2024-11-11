<?php

use App\Models\Track;
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
        Schema::create('record_track', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->integer('position');
            $table->foreignIdFor(Record::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Track::class)->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('record_track');
    }
};
