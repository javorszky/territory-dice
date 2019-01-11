<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRectanglesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rectangles', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedTinyInteger('corner')->comment('1 - Top Left, 2 - Top Right, 3 - Bottom Right, 4 - Bottom Left.' );
            $table->unsignedSmallInteger('widht');
            $table->unsignedSmallInteger('height');
            $table->unsignedTinyInteger('team');
            $table->uuid('session')->comment('Websocket session');
            $table->index(['team', 'session']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rectangles');
    }
}
