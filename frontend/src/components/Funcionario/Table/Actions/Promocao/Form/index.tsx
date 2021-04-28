import React, { useContext } from "react";
import { atualizarFuncionarioRequest } from "requests/Funcionario";
import { FuncionarioContext } from "store/contexts/FuncionarioContext";
import { Funcionario } from "types/Funcionario";
import { notyfError, notyfSuccess } from "utils/notifications";
import { findProximaCategoria } from "utils/helpers";

type Props = {
  funcionario: Funcionario;
};

export default function PromocaoForm(props: Props) {
  const { atualizarFuncionario } = useContext(FuncionarioContext);

  const submit = async () => {
    if (!props.funcionario.categoria || !props.funcionario.salario) return;
    let nextCategoria = findProximaCategoria(props.funcionario.categoria);
    let novoFuncionario = {
      id: props.funcionario.id,
      categoria: nextCategoria
    } as Funcionario;

    console.log("NOVO", novoFuncionario);

    if (props.funcionario.categoria !== nextCategoria) {
      let antigoSalario = props.funcionario.salario;
      novoFuncionario.salario = antigoSalario + (antigoSalario / 100) * 25;
    }

    let response = await atualizarFuncionarioRequest(novoFuncionario);
    if (response) {
      atualizarFuncionario(response);
      notyfSuccess("Funcionario promovido");
    } else {
      notyfError("Erro ao promover funcionário");
    }
  };

  return (
    <div>
      <fieldset>
        <div className="form-group">
          <h5>
            Funcionário será promovido de {props.funcionario.categoria} para{" "}
            {findProximaCategoria(props.funcionario.categoria)}
          </h5>

          <button
            type="button"
            className="btn btn-success btn-lg btn-block"
            onClick={submit}
          >
            {props.funcionario ? "Atualizar" : "Cadastrar"}
          </button>
        </div>
      </fieldset>
    </div>
  );
}

PromocaoForm.defaultProps = {
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
