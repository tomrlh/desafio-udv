<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Departamento;
use App\Models\DepartamentoTelefone;

class DepartamentosController extends Controller
{
    public function index()
    {
        return Departamento::with('telefones')->get();
    }

    public function show($id)
    {
        return Departamento::find($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|unique:departamentos|max:255',
        ]);

        $departamento = Departamento::create([
            'nome' => $request->nome,
        ], [
            'nome.required' => 'Nome é obrigatório',
        ]);

        foreach ($request->telefones as $telefone) {
            DepartamentoTelefone::create([
                'telefone' => $telefone, 'departamento_id' => $departamento->id
            ]);
        }

        $departamento->load(['telefones']);

        return response()->json($departamento);
    }

    public function update(Request $request, $id)
    {
        $departamento = Departamento::findOrFail($id);
        $departamento->update($request->all());

        return $departamento;
    }

    public function destroy(Request $request, $id)
    {
        $departamento = Departamento::findOrFail($id);
        $departamento->delete();

        return true;
    }
}
