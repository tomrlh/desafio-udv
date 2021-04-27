<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'data_nascimento', 'sexo', 'email', 'senha'];

    public function telefones()
    {
        return $this->hasMany(FuncionarioTelefone::class);
    }

    public function enderecos()
    {
        return $this->hasMany(FuncionarioEndereco::class);
    }
}
