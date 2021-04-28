import { Perfil } from "./Perfil";

export interface Usuario {
  id: number;
  name: string;
  email: string;
  password: string;
  perfil_id: number;
  perfil: Perfil | null;
}
