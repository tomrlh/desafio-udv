<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('status', function () {
    return 'A aplicação está rodando :D';
});

Route::post('login', 'App\Http\Controllers\Api\AuthController@login');

Route::resource('users', 'App\Http\Controllers\Api\UsersController');

Route::resource(
    'departamentos',
    'App\Http\Controllers\Api\DepartamentosController'
);

Route::resource('cargos', 'App\Http\Controllers\Api\CargosController');

Route::resource(
    'funcionarios',
    'App\Http\Controllers\Api\FuncionariosController'
);

Route::put(
    'funcionarios/{id}/admissao',
    'App\Http\Controllers\Api\FuncionariosController@admissao'
);