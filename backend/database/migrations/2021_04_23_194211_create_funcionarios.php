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
            $table->string('data_nascimento');
            $table->string('sexo');
            $table->string('email');
            $table->string('senha');
            $table->float('salario')->nullable();
            $table->string('categoria')->nullable();
            $table->string('situacao')->nullable();
            $table
                ->foreign("cargo_id")
                ->references('id')
                ->on('cargos')->onDelete('cascade');
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
