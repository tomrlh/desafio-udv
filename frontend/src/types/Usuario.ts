import { Perfil } from "./Perfil";

export interface Usuario {
  id: number;
  name: string;
  email: string;
  password: string;
  perfil_id: number;
  perfil: Perfil | null;
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
