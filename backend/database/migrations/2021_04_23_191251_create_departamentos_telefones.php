<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartamentosTelefones extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departamentos_telefones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("departamento_id");
            $table->string("telefone", 14);
            $table
                ->foreign("departamento_id")
                ->references('id')
                ->on('departamentos');
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
        Schema::dropIfExists('departamentos_telefones');
    }
}
