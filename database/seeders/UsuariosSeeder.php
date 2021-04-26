<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Administrador',
            'email' => 'administrador@gmail.com',
            'password' => Hash::make('administrador'),
            'perfil_id' => 1,
        ]);

        DB::table('users')->insert([
            'name' => 'Supervisor',
            'email' => 'supervisor@gmail.com',
            'password' => Hash::make('supervisor'),
            'perfil_id' => 2,
        ]);

        DB::table('users')->insert([
            'name' => 'Funcionario',
            'email' => 'funcionario@gmail.com',
            'password' => Hash::make('funcionario'),
            'perfil_id' => 3,
        ]);
    }
}
