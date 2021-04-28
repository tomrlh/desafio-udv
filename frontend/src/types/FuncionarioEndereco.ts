import { Funcionario } from "./Funcionario";

export interface FuncionarioEndereco {
  id: number | null;
  endereco: string;
  funcionario_id: number | null;
  funcionario: Funcionario;
}
