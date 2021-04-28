<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('status', function () {
    return 'A aplicação está rodando :D';
});

Route::post('login', 'App\Http\Controllers\Api\AuthController@login');

Route::resource('users', 'App\Http\Controllers\Api\UsersController')->middleware('auth:sanctum');

Route::resource(
    'departamentos',
    'App\Http\Controllers\Api\DepartamentosController'
)->middleware('auth:sanctum');

Route::resource('cargos', 'App\Http\Controllers\Api\CargosController')->middleware('auth:sanctum');

Route::resource(
    'funcionarios',
    'App\Http\Controllers\Api\FuncionariosController'
)->middleware('auth:sanctum');
