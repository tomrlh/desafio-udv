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
        $validator = Validator::make($request->all(), [
            'nome' => 'required|unique:cargos|max:255',
            'salario_base' => 'required|numeric',
            'departamento_id' => 'required|numeric|exists:departamentos,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages());
        }

        $cargo = Cargo::create([
            'nome' => $request->nome,
            'salario_base' => $request->salario_base,
        ]);

        $cargo->departamento()->associate($request->departamento_id);

        return response()->json($cargo);
    }

    public function update(Request $request, $id)
    {
        $cargo = Cargo::findOrFail($id);
        $cargo->update($request->all());

        return $cargo;
    }

    public function destroy(Request $request, $id)
    {
        $cargo = Cargo::findOrFail($id);
        $cargo->delete();

        return true;
    }
}
