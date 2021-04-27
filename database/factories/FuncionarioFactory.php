<?php

namespace Database\Factories;

use App\Models\Funcionario;
use Illuminate\Database\Eloquent\Factories\Factory;

class FuncionarioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Funcionario::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nome' => $this->faker->name(),
            'data_nascimento' => $this->faker->dateTime(),
            'sexo' => $this->faker->numberBetween(0, 1),
            'email' => $this->faker->unique()->safeEmail,
            'senha' => $this->faker->password(),
        ];
    }
}
