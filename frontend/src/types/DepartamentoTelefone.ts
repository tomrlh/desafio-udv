import { Departamento } from "./Departamento";

export interface DepartamentoTelefone {
  id: number | null;
  telefone: string;
  departamento_id: number | null;
  departamento: Departamento;
}
