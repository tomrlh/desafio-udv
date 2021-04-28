import { Usuario } from "types/Usuario";
import { axiosInstance as axios } from "./Global";

export const getUsuariosRequest = async (): Promise<any> => {
  let res: any = await axios
    .get("users")
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const saveUsuarioRequest = async (usuario: Usuario): Promise<any> => {
  console.log("NA REQUEST", usuario);
  let res: any = await axios
    .post("users", usuario)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const atualizarUsuarioRequest = async (
  usuario: Usuario
): Promise<any> => {
  let res: any = await axios
    .put(`users/${usuario.id}`, usuario)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const removeUsuarioRequest = async (usuario: Usuario): Promise<any> => {
  let res: any = await axios
    .delete(`users/${usuario.id}`)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};
