import { Departamento } from "types/Departamento";
import { axiosInstance as axios } from "./Global";

export const getDepartamentosRequest = async (): Promise<any> => {
  let res: any = await axios
    .get("departamentos")
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const saveDepartamentoRequest = async (
  departamento: Departamento
): Promise<any> => {
  let res: any = await axios
    .post("departamentos", departamento)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const atualizarDepartamentoRequest = async (
  departamento: Departamento
): Promise<any> => {
  let res: any = await axios
    .put(`departamentos/${departamento.id}`, departamento)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const removeDepartamentoRequest = async (
  departamento: Departamento
): Promise<any> => {
  let res: any = await axios
    .delete(`departamentos/${departamento.id}`)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};
