import { Cargo } from "types/Cargo";
import { axiosInstance as axios } from "./Global";

export const getCargosRequest = async (): Promise<any> => {
  let res: any = await axios
    .get("cargos")
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const saveCargoRequest = async (cargo: Cargo): Promise<any> => {
  let res: any = await axios
    .post("cargos", cargo)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const atualizarCargoRequest = async (cargo: Cargo): Promise<any> => {
  let res: any = await axios
    .put(`cargos/${cargo.id}`, cargo)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const removeCargoRequest = async (cargo: Cargo): Promise<any> => {
  let res: any = await axios
    .delete(`cargos/${cargo.id}`)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};
