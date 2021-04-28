import React, { useContext, useEffect, useState } from "react";
import { getCargosRequest } from "requests/Cargo";
import { CargoContext } from "store/contexts/CargoContext";
import { DepartamentoContext } from "store/contexts/DepartamentoContext";
import { Funcionario } from "types/Funcionario";
import { notyfError, notyfErrors, notyfSuccess } from "utils/notifications";

type Props = {
  funcionario: Funcionario;
};

export default function AdmissaoForm(props: Props) {
  const { cargos, setCargos } = useContext(CargoContext);
  const [cargoId, setCargoId] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [salario, setSalario] = useState("");

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
              console.log(Number(e.target.value));
              setCategoria(e.target.value);
            }}
          >
            <option selected value="0">
              Selecione
            </option>
            <option value="Traineer">Traineer</option>
            <option value="Júnior">Júnior</option>
            <option value="Pleno">Pleno</option>
            <option value="Sênior">Sênior</option>
            <option value="Master">Master</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Salário</label>
          <input
            type="number"
            className="form-control"
            value={salario}
            onChange={e => {
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
