<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    public function index()
    {
        return User::with('perfil')->get();
    }

    public function show($id)
    {
        return User::find($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|unique:users',
            'password' => 'required',
            'perfil_id' => 'required|numeric|exists:perfis,id',
        ], [
            'name.required' => 'aé obrigatório',
            'name.max' => 'Tamanho máximo para nome é 255',
            'email.required' => 'Email é obrigatório',
            'email.email' => 'Insira um email com formato válido',
            'password.required' => 'Senha é obrigatória',
            'perfil_id.required' => 'Perfil é obrigatório',
          ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $user->perfil()->associate($request->perfil_id);

        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function destroy(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return true;
    }
}
