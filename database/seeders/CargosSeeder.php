<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CargosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cargos')->insert([
            // RECURSOS HUMANOS
            [
                'nome' => 'Recrutamento',
                'salario_base' => 2100.0,
                'departamento_id' => 1,
            ],
            [
                'nome' => 'Departamento Pessoal',
                'salario_base' => 1500.0,
                'departamento_id' => 1,
            ],
            [
                'nome' => 'Treinamento',
                'salario_base' => 1750.0,
                'departamento_id' => 1,
            ],
            // TECNOLOGIA DA INFORMAÇÃO
            [
                'nome' => 'Gerente de TI',
                'salario_base' => 9000.0,
                'departamento_id' => 2,
            ],
            [
                'nome' => 'Analista de TI',
                'salario_base' => 5500.0,
                'departamento_id' => 2,
            ],
            [
                'nome' => 'Supervisor de TI',
                'salario_base' => 6500.0,
                'departamento_id' => 2,
            ],
            // DIRETORIA
            [
                'nome' => 'CEO',
                'salario_base' => 15000.0,
                'departamento_id' => 3,
            ],
            [
                'nome' => 'CTO',
                'salario_base' => 15000.0,
                'departamento_id' => 3,
            ],
            [
                'nome' => 'Diretor de TI',
                'salario_base' => 1000.0,
                'departamento_id' => 3,
            ],
        ]);
    }
}
