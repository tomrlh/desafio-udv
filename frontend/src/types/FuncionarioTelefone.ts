import { Funcionario } from "./Funcionario";

export interface FuncionarioTelefone {
  id: number | null;
  telefone: string;
  funcionario_id: number | null;
  funcionario: Funcionario;
}
