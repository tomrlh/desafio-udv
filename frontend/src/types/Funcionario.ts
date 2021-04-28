import { Cargo } from "./Cargo";
import { FuncionarioEndereco } from "./FuncionarioEndereco";
import { FuncionarioTelefone } from "./FuncionarioTelefone";

export interface Funcionario {
  id: number | null;
  nome: string;
  email: string;
  senha: string;
  data_nascimento: string;
  sexo: string;
  categoria: string | null;
  salario: string | null;
  situacao: string | null;
  cargo_id: number | null;
  cargo: Cargo | null;
  telefones: FuncionarioTelefone[] | null;
  enderecos: FuncionarioEndereco[] | null;
}
