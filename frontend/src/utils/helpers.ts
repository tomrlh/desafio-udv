import * as constants from "utils/constants";

export const CLOSE_MODAL_BUTTON_SUFFIX = "-close-button";

export const generateRandomNumber = (length: number) => {
  let dynamicLength = "1";
  for (let i = 0; i < length; i++) {
    dynamicLength += "0";
  }
  return Math.floor(Math.random() * Number(dynamicLength)).toString();
};

export const findSituacaoColor = (situacao: string) => {
  switch (situacao) {
    case constants.ATIVO:
      return "badge-success";
    case constants.INATIVO:
      return "badge-light";
    case constants.FERIAS:
      return "badge-info";
    case constants.APOSENTADO:
      return "badge-warning";

    default:
      return "badge-secondary";
  }
};

export const findProximaCategoria = (categoria: string | null) => {
  if (!categoria) return constants.TRAINEER;

  let codigo = categoria.charAt(0);
  if (constants.TRAINEER.includes(codigo)) {
    return constants.JUNIOR;
  }
  if (constants.JUNIOR.includes(codigo)) {
    return constants.PLENO;
  }
  if (constants.PLENO.includes(codigo)) {
    return constants.SENIOR;
  }
  if (constants.SENIOR.includes(codigo)) {
    return constants.MASTER;
  } else {
    return constants.MASTER;
  }
};
