import React, { useContext, useEffect, useState } from "react";
import { getCargosRequest } from "requests/Cargo";
import { CargoContext } from "store/contexts/CargoContext";
import { DepartamentoContext } from "store/contexts/DepartamentoContext";
import { Funcionario } from "types/Funcionario";
import { notyfError, notyfErrors, notyfSuccess } from "utils/notifications";

type Props = {
  funcionario: Funcionario;
};

export default function SituacaoForm(props: Props) {
  const { cargos, setCargos } = useContext(CargoContext);
  const [cargoId, setCargoId] = useState(0);

  const submit = async () => {
    /*let novoDepartamento = { nome, telefones } as Departamento;

    let response = null;

    if (props.departamento) {
      novoDepartamento.id = props.departamento.id;
      response = await atualizarDepartamentoRequest(novoDepartamento);
      if (response) {
        atualizarDepartamento(novoDepartamento);
        notyfSuccess("Departamento atualizado");
      } else {
        notyfError("Erro ao atualizar departamento");
      }
    } else {
      response = await saveDepartamentoRequest(novoDepartamento);
      if (response.errors) {
        notyfErrors(response);
      } else {
        notyfSuccess("Departamento cadastrado");
        addDepartamento(response);
        clearForm();
      }
    }*/
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
              console.log(Number(e.target.value));
              setCargoId(Number(e.target.value));
            }}
          >
            <option selected value="0">
              Selecione
            </option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
            <option value="Em Férias">Em férias</option>
            <option value="Aposentado(a)">Aposentado(a)</option>
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
