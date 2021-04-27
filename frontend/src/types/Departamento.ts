export interface Departamento {
  id: number | null;
  nome: string;
  telefones: string[];
}

export enum DepartamentoFieldsAPI {
  NOME = "name",
  TELEFONES = "telefones"
}

export enum DepartamentoFieldsNames {
  NOME = "Nome",
  TELEFONES = "Telefones"
}
