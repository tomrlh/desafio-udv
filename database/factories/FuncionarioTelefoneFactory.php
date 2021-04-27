<?php

namespace Database\Factories;

use App\Models\FuncionarioTelefone;
use Illuminate\Database\Eloquent\Factories\Factory;

class FuncionarioTelefoneFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = FuncionarioTelefone::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'telefone' => strval($this->faker->phoneNumber()),
            'funcionario_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
