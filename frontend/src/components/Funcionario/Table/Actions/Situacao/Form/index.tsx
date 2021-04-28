import React, { useContext, useState } from "react";
import { atualizarFuncionarioRequest } from "requests/Funcionario";
import { FuncionarioContext } from "store/contexts/FuncionarioContext";
import { Funcionario } from "types/Funcionario";
import { notyfError, notyfErrors, notyfSuccess } from "utils/notifications";
import * as constants from "utils/constants";

type Props = {
  funcionario: Funcionario;
};

export default function SituacaoForm(props: Props) {
  const { atualizarFuncionario } = useContext(FuncionarioContext);
  const [situacao, setSituacao] = useState("");

  const clearForm = () => {};

  const submit = async () => {
    let novoFuncionario = {
      id: props.funcionario.id,
      situacao
    } as Funcionario;

    let response = await atualizarFuncionarioRequest(novoFuncionario);
    if (response) {
      atualizarFuncionario(response);
      notyfSuccess("Funcionario admitido");
      clearForm();
    } else {
      notyfError("Erro ao atualizar departamento");
    }
  };

  return (
    <div>
      <fieldset>
        <div className="form-group">
          <label htmlFor="departamentoSelect">Situação</label>
          <select
            className="form-control"
            id="departamentoSelect"
            onChange={e => {
              console.log(e.target.value);
              setSituacao(e.target.value);
            }}
          >
            <option selected value="0">
              Selecione
            </option>
            <option value={constants.ATIVO}>{constants.ATIVO}</option>
            <option value={constants.INATIVO}>{constants.INATIVO}</option>
            <option value={constants.FERIAS}>{constants.FERIAS}</option>
            <option value={constants.APOSENTADO}>{constants.APOSENTADO}</option>
          </select>
        </div>

        <button
          type="button"
          className="btn btn-success btn-lg btn-block"
          onClick={submit}
        >
          {props.funcionario ? "Atualizar" : "Cadastrar"}
        </button>
      </fieldset>
    </div>
  );
}

SituacaoForm.defaultProps = {
  funcionario: null
};

const styles = {
  bodyList: {
    float: "left" as const,
    width: 200,
    overflow: "auto",
    height: 100
  },
  addTelefone: {
    cursor: "pointer"
  }
};
