<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FuncionarioTelefone extends Model
{
    use HasFactory;

    protected $fillable = ['telefone', 'funcionario_id'];

    protected $table = 'funcionarios_telefones';
}
