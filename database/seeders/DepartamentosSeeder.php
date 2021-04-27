<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartamentosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('departamentos')->insert([
            ['nome' => 'Recursos Humanos'],
            ['nome' => 'Tecnologia da Informação'],
            ['nome' => 'Diretoria'],
        ]);
    }
}
