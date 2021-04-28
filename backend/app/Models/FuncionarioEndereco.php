<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FuncionarioEndereco extends Model
{
    use HasFactory;

    protected $fillable = ['endereco', 'funcionario_id'];

    protected $table = 'funcionarios_enderecos';
}
