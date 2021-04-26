<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCargosUsuarios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cargos_usuarios', function (Blueprint $table) {
            $table->id();
            $table->integer("cargo_id");
            $table->integer("user_id");
            $table->foreign("user_id")->references('id')->on('users');
            $table->foreign("cargo_id")->references('id')->on('cargos');
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
        Schema::dropIfExists('cargos_usuarios');
    }
}