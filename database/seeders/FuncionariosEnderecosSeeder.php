<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FuncionarioEndereco;

class FuncionariosEnderecosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($counter = 0; $counter <= 10; $counter++) {
            FuncionarioEndereco::factory()->create();
        }
    }
}
