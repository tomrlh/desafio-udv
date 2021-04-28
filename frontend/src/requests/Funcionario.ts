import { Funcionario } from "types/Funcionario";
import { axiosInstance as axios } from "./Global";

export const getFuncionariosRequest = async (): Promise<any> => {
  let res: any = await axios
    .get("funcionarios")
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const saveFuncionarioRequest = async (
  funcionario: Funcionario
): Promise<any> => {
  let res: any = await axios
    .post("funcionarios", funcionario)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const atualizarFuncionarioRequest = async (
  funcionario: Funcionario
): Promise<any> => {
  let res: any = await axios
    .put(`funcionarios/${funcionario.id}`, funcionario)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};

export const removeFuncionarioRequest = async (
  funcionario: Funcionario
): Promise<any> => {
  let res: any = await axios
    .delete(`funcionarios/${funcionario.id}`)
    .then(response => response.data)
    .catch(error => error.response.data);

  return res;
};
