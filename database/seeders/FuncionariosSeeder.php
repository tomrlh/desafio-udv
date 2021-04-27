<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Generator as Faker;

class FuncionariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        DB::table('funcionarios')->insert([
            [
                'nome' => $faker->name,
                'data_nascimento' => $faker->dateTime(),
                'email' => $faker->unique()->safeEmail,
                'senha' => $faker->password,
            ],
        ]);
    }
}
