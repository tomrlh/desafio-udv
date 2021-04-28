import React, { useContext, useEffect, useState } from "react";
import { atualizarCargoRequest, saveCargoRequest } from "requests/Cargo";
import { getDepartamentosRequest } from "requests/Departamento";
import { CargoContext } from "store/contexts/CargoContext";
import { DepartamentoContext } from "store/contexts/DepartamentoContext";
import { Cargo } from "types/Cargo";
import { notyfError, notyfErrors, notyfSuccess } from "utils/notifications";

type Props = {
  cargo: Cargo;
};

export default function CargoForm(props: Props) {
  const { addCargo, atualizarCargo } = useContext(CargoContext);
  const { departamentos, setDepartamentos } = useContext(DepartamentoContext);
  const [nome, setNome] = useState("");
  const [salarioBase, setSalarioBase] = useState<any>([]);
  const [departamentoId, setDepartamentoId] = useState(0);

  const clearForm = () => {
    setNome("");
    setSalarioBase(0);
    setDepartamentoId(0);
  };

  const submit = async () => {
    let novoCargo = {
      nome,
      salario_base: salarioBase,
      departamento_id: departamentoId
    } as Cargo;

    let response = null;

    if (props.cargo) {
      novoCargo.id = props.cargo.id;
      response = await atualizarCargoRequest(novoCargo);
      if (response) {
        atualizarCargo(response);
        notyfSuccess("Cargo atualizado");
      } else {
        notyfError("Erro ao atualizar cargo");
      }
    } else {
      response = await saveCargoRequest(novoCargo);
      console.log(response);
      if (response.errors) {
        notyfErrors(response);
      } else {
        notyfSuccess("Cargo cadastrado");
        addCargo(response);
        clearForm();
      }
    }
  };

  useEffect(() => {
    if (props.cargo) {
      setNome(props.cargo.nome);
      console.log(props.cargo);
      setSalarioBase(props.cargo.salario_base);
    }

    const getDepartamentos = async () => {
      let newDepartamentos = await getDepartamentosRequest();
      setDepartamentos(newDepartamentos);
    };
    getDepartamentos();
  }, []);

  return (
    <div>
      <fieldset>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Nome</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={e => {
              setNome(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="control-label">Salario Base</label>
          <div className="form-group">
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                maxLength={14}
                value={salarioBase}
                onChange={e => {
                  setSalarioBase(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="departamentoSelect">Departamento</label>
              <select
                className="form-control"
                id="departamentoSelect"
                onChange={e => {
                  console.log(Number(e.target.value));
                  setDepartamentoId(Number(e.target.value));
                }}
              >
                <option selected value="0">
                  Selecione
                </option>
                {departamentos &&
                  departamentos.length > 0 &&
                  departamentos.map(departamento => (
                    <option value={departamento.id?.toString()}>
                      {departamento.nome}
                    </option>
                  ))}
              </select>
            </div>

            <button
              type="button"
              className="btn btn-success btn-lg btn-block"
              onClick={submit}
            >
              {props.cargo ? "Atualizar" : "Cadastrar"}
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

CargoForm.defaultProps = {
  cargo: null
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
