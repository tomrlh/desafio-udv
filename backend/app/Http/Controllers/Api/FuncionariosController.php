<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Funcionario;
use App\Models\FuncionarioTelefone;
use App\Models\FuncionarioEndereco;

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
        $request->validate([
            'nome' => 'required|max:255',
            'data_nascimento' => 'required|date',
            'sexo' => 'required|between:0,1',
            'email' => 'required|email',
            'senha' => 'required|min:8',
        ]);

        $funcionario = Funcionario::create([
            'nome' => $request->nome,
            'data_nascimento' => $request->data_nascimento,
            'sexo' => $request->sexo,
            'email' => $request->email,
            'senha' => bcrypt($request->password),
        ]);

        foreach ($request->telefones as $telefone) {
            FuncionarioTelefone::create([
                'telefone' => $telefone, 'funcionario_id' => $funcionario->id
            ]);
        }
        foreach ($request->enderecos as $endereco) {
            FuncionarioEndereco::create([
                'endereco' => $endereco, 'funcionario_id' => $funcionario->id
            ]);
        }
        $funcionario->load(['telefones']);
        $funcionario->load(['enderecos']);

        return response()->json($funcionario);
    }

    public function update(Request $request, $id)
    {
        $f = Funcionario::findOrFail($id);

        $f->nome = $request->input('nome') ? $request->input('nome') : $f->nome;
        $f->email = $request->input('email') ? $request->input('email') : $f->email;
        $f->senha = $request->input('senha') ? $request->input('senha') : $f->senha;
        $f->data_nascimento = $request->input('data_nascimento') ? $request->input('data_nascimento') : $f->data_nascimento;
        $f->sexo = $request->input('sexo') ? $request->input('sexo') : $f->sexo;
        $f->cargo_id = $request->input('cargo_id') ? $request->input('cargo_id') : $f->cargo_id;
        $f->situacao = $request->input('situacao') ? $request->input('situacao') : $f->situacao;
        $f->categoria = $request->input('categoria') ? $request->input('categoria') : $f->categoria;
        $f->salario = $request->input('salario') ? $request->input('salario') : $f->salario;

        if($request->input("telefones") !== null) {
            $f->telefones()->delete();
            foreach ($request->telefones as $telefone) {
                FuncionarioTelefone::create([
                    'telefone' => $telefone, 'funcionario_id' => $f->id
                ]);
            }
        }
        if($request->input("enderecos") !== null) {
            $f->enderecos()->delete();
            foreach ($request->enderecos as $endereco) {
                FuncionarioEndereco::create([
                    'endereco' => $endereco, 'funcionario_id' => $f->id
                ]);
            }
        }
        $f->save();

        $f->load(['cargo']);
        $f->load(['telefones']);
        $f->load(['enderecos']);

        return $f;
    }

    public function destroy(Request $request, $id)
    {
        $funcionario = Funcionario::findOrFail($id);
        $funcionario->delete();

        return true;
    }
}
