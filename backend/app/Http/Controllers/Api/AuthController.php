<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'email|required',
            'password' => 'required',
        ], [
            'email.required' => 'Email é obrigatório',
            'password.required' => 'Senha é obrigatória',
        ]);

        $credentials = request(['email', 'password']);
        if (!auth()->attempt($credentials)) {
            return response()->json(
                [
                    'message' => 'Os dados informados estão incorretos.',
                    'errors' => [
                        'password' => ['Credenciais inválidas'],
                    ],
                ],
                422
            );
        }

        $user = User::where('email', $request->email)->first();
        $user->load('perfil');
        $authToken = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'access_token' => $authToken,
            'usuario' => $user
        ]);
    }
}
