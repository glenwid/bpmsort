<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Record;
use App\Models\Artist;

class CreateRecordArtistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('record_artists', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignIdFor(Record::class);
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
        Schema::dropIfExists('record_artists');
    }
}
