export interface Usuario {
  id: number;
  name: string;
  email: string;
  password: string;
}

export enum UsuarioFieldsAPI {
  NOME = "name",
  EMAIL = "email",
  SENHA = "password"
}

export enum UsuarioFieldsNames {
  NOME = "Nome",
  EMAIL = "Email",
  SENHA = "Senha"
}
