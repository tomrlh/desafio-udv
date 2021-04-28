import { Departamento } from "./Departamento";

export interface Cargo {
  id: number | null;
  nome: string;
  salario_base: number;
  departamento_id: number;
  departamento: Departamento | null;
}
