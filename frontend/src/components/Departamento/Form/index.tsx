import React, { useContext, useEffect, useState } from "react";
import {
  atualizarDepartamentoRequest,
  saveDepartamentoRequest
} from "requests/Departamento";
import { DepartamentoContext } from "store/contexts/DepartamentoContext";
import { Departamento } from "types/Departamento";
import { notyfError, notyfErrors, notyfSuccess } from "utils/notifications";

type Props = {
  departamento: Departamento;
};

export default function DepartamentoForm(props: Props) {
  const { addDepartamento, atualizarDepartamento } = useContext(
    DepartamentoContext
  );
  const [nome, setNome] = useState("");
  const [telefones, setTelefones] = useState<any>([]);
  const [telefoneToAdd, setTelefoneToAdd] = useState("");

  const removeTelefone = (index: number) => {
    telefones.splice(index, 1);
    setTelefones([...telefones]);
  };

  const clearForm = () => {
    setNome("");
    setTelefones([]);
    setTelefoneToAdd("");
  };

  const submit = async () => {
    let novoDepartamento = { nome, telefones } as Departamento;

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
    }
  };

  useEffect(() => {
    if (props.departamento) {
      setNome(props.departamento.nome);
      console.log(props.departamento);
      setTelefones(props.departamento.telefones);
    }
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
          <label className="control-label">Telefones</label>
          <div className="form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                maxLength={14}
                value={telefoneToAdd}
                onChange={e => {
                  setTelefoneToAdd(e.target.value);
                }}
              />
              <div className="input-group-append" style={styles.addTelefone}>
                <span
                  className="input-group-text"
                  onClick={() => {
                    if (telefoneToAdd === "") return;
                    telefones.push(telefoneToAdd);
                    setTelefoneToAdd("");
                    setTelefones([...telefones]);
                  }}
                >
                  <i className="bi bi-plus-circle-fill text-success" />
                </span>
              </div>
            </div>

            <div style={styles.bodyList}>
              <ul className="list-group">
                {telefones.map((telefone: any, idx: number) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={idx}
                  >
                    {typeof telefone === "object"
                      ? telefone.telefone
                      : telefone}
                    <span
                      className="badge badge-primary badge-pill"
                      style={styles.addTelefone}
                      onClick={() => removeTelefone(idx)}
                    >
                      X
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="btn btn-success btn-lg btn-block"
              onClick={submit}
            >
              {props.departamento ? "Atualizar" : "Cadastrar"}
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

DepartamentoForm.defaultProps = {
  departamento: null
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
