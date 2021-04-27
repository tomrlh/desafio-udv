export interface Funcionario {
  id: number;
  nome: string;
  dataNascimento: string;
  sexo: string;
  email: string;
  senha: string;
}

export enum FuncionarioFieldsAPI {
  NOME = "nome",
  DATA_NASCIMENTO = "data_nascimento",
  SEXO = "sexo",
  EMAIL = "email",
  SENHA = "senha"
}

export enum FuncionarioFieldsNames {
  NOME = "Nome",
  DATA_NASCIMENTO = "Data de Nascimento",
  SEXO = "Sexo",
  EMAIL = "Email",
  SENHA = "Senha"
}
