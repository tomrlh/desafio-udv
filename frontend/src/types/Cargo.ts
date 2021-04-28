import { Departamento } from "./Departamento";

export interface Cargo {
  id: number | null;
  nome: string;
  salario_base: number;
  departamento_id: number;
  departamento: Departamento | null;
}

export enum CargoFieldsAPI {
  NOME = "name",
  SALARIO_BASE = "salario_base",
  DEPARTAMENTO_ID = "departamento_id"
}

export enum CargoFieldsNames {
  NOME = "Nome",
  SALARIO_BASE = "Salário Base",
  DEPARTAMENTO_ID = "Departamento"
}
