import React, { useContext, useState } from "react";
import { atualizarFuncionarioRequest } from "requests/Funcionario";
import { FuncionarioContext } from "store/contexts/FuncionarioContext";
import { Funcionario } from "types/Funcionario";
import { notyfError, notyfErrors, notyfSuccess } from "utils/notifications";

type Props = {
  funcionario: Funcionario;
};

export default function AumentoForm(props: Props) {
  const { atualizarFuncionario } = useContext(FuncionarioContext);
  const [situacao, setSituacao] = useState("");
  const [salario, setSalario] = useState("");

  const clearForm = () => {};

  const submit = async () => {
    let novoFuncionario = {
      id: props.funcionario.id,
      salario: Number(salario)
    } as Funcionario;

    let response = await atualizarFuncionarioRequest(novoFuncionario);
    if (response) {
      atualizarFuncionario(response);
      notyfSuccess("Salário aumentado");
      clearForm();
    } else {
      notyfError("Erro ao atualizar salário");
    }
  };

  return (
    <div>
      <fieldset>
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

AumentoForm.defaultProps = {
  funcionario: null
};
