<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Funcionario;

class FuncionariosController extends Controller
{
    public function index()
    {
        return Funcionario::with('enderecos')
            ->with('telefones')
            ->get();
    }

    public function show($id)
    {
        return Funcionario::with('enderecos')
            ->with('telefones')
            ->where('id', $id)
            ->get()
            ->first();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|unique:funcionarios|max:255',
            'data_nascimento' => 'required|date',
            'sexo' => 'required|between:0,1',
            'email' => 'required|email',
            'senha' => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages());
        }

        $funcionario = Funcionario::create([
            'nome' => $request->nome,
            'data_nascimento' => $request->data_nascimento,
            'sexo' => $request->sexo,
            'email' => $request->email,
            'senha' => bcrypt($request->password),
        ]);

        return response()->json($funcionario);
    }

    public function update(Request $request, $id)
    {
        $funcionario = Funcionario::findOrFail($id);
        $funcionario->update($request->all());

        return $funcionario;
    }

    public function destroy(Request $request, $id)
    {
        $funcionario = Funcionario::findOrFail($id);
        $funcionario->delete();

        return true;
    }
}
