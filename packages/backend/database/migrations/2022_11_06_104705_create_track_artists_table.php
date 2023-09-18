<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Artist;
use App\Models\Track;

class CreateTrackArtistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('track_artists', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignIdFor(Track::class);
            $table->foreignIdFor(Artist::class);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('track_artists');
    }
}
