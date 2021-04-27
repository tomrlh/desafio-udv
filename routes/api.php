<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', 'App\Http\Controllers\Api\AuthController@login');

Route::resource('users', 'App\Http\Controllers\Api\UsersController');
