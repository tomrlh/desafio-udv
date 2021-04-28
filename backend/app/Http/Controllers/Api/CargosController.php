<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cargo;

class CargosController extends Controller
{
    public function index()
    {
        return Cargo::with('departamento')->get();
    }

    public function show($id)
    {
        return Cargo::find($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|unique:cargos|max:255',
            'salario_base' => 'required|numeric',
            'departamento_id' => 'required|numeric|exists:departamentos,id',
        ], [
            'nome.required' => 'Nome é obrigatório',
            'nome.unique' => 'Este nome já existe',
            'nome.max' => 'Tamanho máximo para nome é 255',
            'salario_base.required' => 'Salário Base é obrigatório',
            'departamento_id.required' => 'Departamento é obrigatório',
          ]);

        $cargo = Cargo::create([
            'nome' => $request->nome,
            'salario_base' => $request->salario_base,
            'departamento_id' => $request->departamento_id
        ]);

        $cargo->departamento()->associate($request->departamento_id);

        $cargo->load('departamento');

        return response()->json($cargo);
    }

    public function update(Request $request, $id)
    {
        $cargo = Cargo::findOrFail($id);
        $cargo->update($request->all());

        $cargo->load('departamento');

        return $cargo;
    }

    public function destroy(Request $request, $id)
    {
        $cargo = Cargo::findOrFail($id);
        $cargo->delete();

        return true;
    }
}
