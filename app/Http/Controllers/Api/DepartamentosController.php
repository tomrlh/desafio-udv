<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Departamento;

class DepartamentosController extends Controller
{
    public function index()
    {
        return Departamento::all();
    }

    public function show($id)
    {
        return Departamento::find($id);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|unique:departamentos|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages());
        }

        $departamento = Departamento::create([
            'nome' => $request->nome,
        ]);

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
