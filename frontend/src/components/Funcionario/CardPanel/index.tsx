import React, { useContext, useEffect } from "react";
import FuncionarioForm from "components/Funcionario/Form";
import CustomModal from "components/Global/Modal/CustomModal";
import { Funcionario } from "types/Funcionario";
import {
  getFuncionariosRequest,
  removeFuncionarioRequest
} from "requests/Funcionario";
import { FuncionarioContext } from "store/contexts/FuncionarioContext";
import { notyfError, notyfSuccess } from "utils/notifications";
import { generateRandomNumber } from "utils/helpers";
import { styles } from "components/Global/Styles";

type Props = {
  funcionarios: Funcionario[];
};

const renderListItem = (
  funcionario: Funcionario,
  atualizarFuncionario: Function,
  removeFuncionario: Function
) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center text-dark">
      {funcionario.nome}
      <div style={{ float: "right" }}>
        <CustomModal
          id={`edit-${funcionario.id}-${funcionario.nome}`}
          popupText="Funcionario"
          title="Funcionario"
          size="modal-lg"
          trigger={
            <button
              type="button"
              className="btn btn-link btn-sm"
              data-toggle="modal"
              data-target={`#${`edit-${funcionario.id}-${funcionario.nome}`}`}
            >
              <i
                className="bi bi-pencil-fill text-warning"
                style={styles.smallIcon}
              />
            </button>
          }
          content={<FuncionarioForm funcionario={funcionario} />}
        />

        <button
          type="button"
          className="btn btn-link btn-sm"
          onClick={async () => {
            let response = await removeFuncionarioRequest(funcionario);
            if (response) {
              removeFuncionario(funcionario);
              notyfSuccess("Funcionario removido");
            } else {
              notyfError("Erro ao remover funcionario");
            }
          }}
        >
          <i
            className="bi bi-x-circle-fill text-danger"
            style={styles.smallIcon}
          />
        </button>
      </div>
    </li>
  );
};

export default function FuncionariosCardPanel(props: Props) {
  const {
    funcionarios,
    setFuncionarios,
    atualizarFuncionario,
    removeFuncionario
  } = useContext(FuncionarioContext);
  const modalId = generateRandomNumber(10);

  useEffect(() => {
    const getFuncionarios = async () => {
      let newFuncionarios = await getFuncionariosRequest();
      setFuncionarios([...newFuncionarios]);
    };
    getFuncionarios();
  }, []);

  return (
    <div>
      <div
        className="card text-white bg-success mb-3"
        style={{ maxWidth: 350 }}
      >
        <div className="card-header">
          <span style={{ float: "left" }}>
            <i
              className="bi bi-file-earmark-person text-light"
              style={styles.mediumIcon}
            />{" "}
            FUNCIONÁRIOS
          </span>

          <span style={{ float: "right" }}>Total: {funcionarios.length}</span>
        </div>
        <div className="card-body" style={styles.bodyList}>
          <ul className="list-group">
            {funcionarios && funcionarios.length > 0 ? (
              <>
                {funcionarios.map(funcionario =>
                  renderListItem(
                    funcionario,
                    atualizarFuncionario,
                    removeFuncionario
                  )
                )}
              </>
            ) : (
              <div className="alert alert-dismissible alert-light">
                <p className="mb-0">Sem funcionarios cadastrados</p>
              </div>
            )}
          </ul>
        </div>

        <div className="card-bottom bg-primary" style={styles.cardBottom}>
          <CustomModal
            id={modalId}
            popupText="Funcionario"
            title="Funcionario"
            size="modal-lg"
            trigger={
              <button
                type="button"
                className="btn btn-link btn-sm"
                data-toggle="modal"
                data-target={`#${modalId}`}
              >
                <i
                  className="bi bi-plus-circle-fill text-success"
                  style={styles.mediumIcon}
                />
              </button>
            }
            content={<FuncionarioForm />}
          />
        </div>
      </div>
    </div>
  );
}

FuncionariosCardPanel.defaultProps = {
  funcionarios: []
};
