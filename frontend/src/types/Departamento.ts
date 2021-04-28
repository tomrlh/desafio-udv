import { DepartamentoTelefone } from "./DepartamentoTelefone";

export interface Departamento {
  id: number | null;
  nome: string;
  telefones: DepartamentoTelefone[];
}

export enum DepartamentoFieldsAPI {
  NOME = "name",
  TELEFONES = "telefones"
}

export enum DepartamentoFieldsNames {
  NOME = "Nome",
  TELEFONES = "Telefones"
}
