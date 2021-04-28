<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DepartamentoTelefone extends Model
{
    use HasFactory;

    protected $fillable = ['telefone', 'departamento_id'];

    protected $table = 'departamentos_telefones';
}
