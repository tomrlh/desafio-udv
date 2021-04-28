import { Funcionario } from "types/Funcionario";

export const filterItems = (
  data: any,
  filterBy: string,
  filterText: string
) => {
  if (data && data.message) {
    return [];
  }
  console.log("recebeu", data);
  if (!data) return [];

  if (filterBy === "nome") {
    return data.filter(
      (funcionario: Funcionario) =>
        funcionario.nome &&
        funcionario.nome.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  if (filterBy === "situacao") {
    if (!data || !data.length || data.length === 0) return [];

    let conditionAllNull = true;

    let filteredData = data.filter((funcionario: Funcionario) => {
      if (
        funcionario.situacao &&
        funcionario.situacao.toLowerCase().includes(filterText.toLowerCase())
      ) {
        conditionAllNull = false;
        return funcionario;
      }
    });
    if (conditionAllNull) {
      return data;
    } else {
      return filteredData;
    }
  }

  if (filterBy === "categoria") {
    if (!data || !data.length || data.length === 0) return [];

    let conditionAllNull = true;

    let filteredData = data.filter(
      (funcionario: Funcionario) =>
        funcionario.categoria &&
        funcionario.categoria.toLowerCase().includes(filterText.toLowerCase())
    );

    if (conditionAllNull) {
      return data;
    } else {
      return filteredData;
    }
  }
  return data;
};

export const filterOptions = [
  {
    property: "nome",
    label: "Nome"
  },
  {
    property: "situacao",
    label: "Situação"
  },
  {
    property: "categoria",
    label: "Categoria"
  }
];
