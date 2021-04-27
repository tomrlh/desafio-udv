<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFuncionarios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('funcionarios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cargo_id')->nullable();
            $table->string('nome');
            $table->date('data_nascimento');
            $table->string('sexo');
            $table->string('email');
            $table->string('senha');
            $table->float('salario')->nullable();
            $table->float('categoria')->nullable();
            $table->float('situacao')->nullable();
            $table
                ->foreign("cargo_id")
                ->references('id')
                ->on('cargos');
            $table->timestamps();
        });
    }

    /**s
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('funcionarios');
    }
}
