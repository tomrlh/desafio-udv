import { Cargo } from "./Cargo";
import { FuncionarioEndereco } from "./FuncionarioEndereco";
import { FuncionarioTelefone } from "./FuncionarioTelefone";

export interface Funcionario {
  id: number | null;
  nome: string | null;
  email: string | null;
  senha: string | null;
  data_nascimento: string | null;
  sexo: string | null;
  categoria: string | null;
  salario: number | null;
  situacao: string | null;
  cargo_id: number | null;
  cargo: Cargo | null;
  telefones: FuncionarioTelefone[] | null;
  enderecos: FuncionarioEndereco[] | null;
}
