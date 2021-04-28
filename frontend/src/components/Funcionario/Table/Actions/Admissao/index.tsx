import React, { useContext, useEffect, useState } from "react";
import { getCargosRequest } from "requests/Cargo";
import { atualizarFuncionarioRequest } from "requests/Funcionario";
import { CargoContext } from "store/contexts/CargoContext";
import { DepartamentoContext } from "store/contexts/DepartamentoContext";
import { FuncionarioContext } from "store/contexts/FuncionarioContext";
import { Funcionario } from "types/Funcionario";
import { notyfError, notyfErrors, notyfSuccess } from "utils/notifications";
import * as constants from "utils/constants";

type Props = {
  funcionario: Funcionario;
};

export default function AdmissaoForm(props: Props) {
  const { cargos } = useContext(CargoContext);
  const { atualizarFuncionario } = useContext(FuncionarioContext);
  const [cargoId, setCargoId] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [salario, setSalario] = useState("");

  const clearForm = () => {};

  const submit = async () => {
    let novoFuncionario = {
      id: props.funcionario.id,
      cargo_id: cargoId,
      categoria,
      salario: Number(salario),
      situacao: "Ativo"
    } as Funcionario;
    console.log("NOVO", novoFuncionario);

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
        {props.funcionario && <h5>Admissão de {props.funcionario.nome}</h5>}

        <div className="form-group">
          <label htmlFor="cardoAdmissaoSelect">Cargo</label>
          <select
            className="form-control"
            id="cardoAdmissaoSelect"
            onChange={e => {
              console.log(Number(e.target.value));
              setCargoId(Number(e.target.value));
            }}
          >
            <option selected value="0">
              Selecione
            </option>
            {cargos &&
              cargos.length > 0 &&
              cargos.map(cargo => (
                <option value={cargo.id?.toString()}>
                  {cargo.nome} - R${cargo.salario_base}
                </option>
              ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="categoriaAdmissaoSelect">Categoria</label>
          <select
            className="form-control"
            id="categoriaAdmissaoSelect"
            onChange={e => {
              console.log(e.target.value);
              setCategoria(e.target.value);
            }}
          >
            <option selected value="0">
              Selecione
            </option>
            <option value={constants.TRAINEER}>{constants.TRAINEER}</option>
            <option value={constants.JUNIOR}>{constants.JUNIOR}</option>
            <option value={constants.PLENO}>{constants.PLENO}</option>
            <option value={constants.SENIOR}>{constants.SENIOR}</option>
            <option value={constants.MASTER}>{constants.MASTER}</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Salário</label>
          <input
            type="number"
            className="form-control"
            value={salario}
            onChange={e => {
              console.log(e.target.value);
              setSalario(e.target.value);
            }}
          />
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

AdmissaoForm.defaultProps = {
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
