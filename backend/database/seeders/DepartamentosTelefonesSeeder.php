<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartamentosTelefonesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('departamentos_telefones')->insert([
            ['telefone' => '(11) 3332-1231', 'departamento_id' => 1],
            ['telefone' => '(11) 3332-1232', 'departamento_id' => 2],
            ['telefone' => '(11) 3332-1233', 'departamento_id' => 3],
        ]);
    }
}
