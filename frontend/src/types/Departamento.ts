import { DepartamentoTelefone } from "./DepartamentoTelefone";

export interface Departamento {
  id: number | null;
  nome: string;
  telefones: DepartamentoTelefone[];
}
