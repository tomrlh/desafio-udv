<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PerfisSeeder::class);
        $this->call(UsuariosSeeder::class);
        $this->call(DepartamentosSeeder::class);
        $this->call(DepartamentosTelefonesSeeder::class);
        $this->call(CargosSeeder::class);
    }
}
