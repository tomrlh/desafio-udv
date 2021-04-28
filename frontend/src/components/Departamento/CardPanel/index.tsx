import React, { useContext, useEffect } from "react";
import DepartamentoForm from "components/Departamento/Form";
import CustomModal from "components/Global/Modal/CustomModal";
import { Departamento } from "types/Departamento";
import {
  getDepartamentosRequest,
  removeDepartamentoRequest
} from "requests/Departamento";
import { DepartamentoContext } from "store/contexts/DepartamentoContext";
import { notyfError, notyfSuccess } from "utils/notifications";
import { generateRandomNumber } from "utils/helpers";
import { styles } from "components/Global/Styles";

type Props = {
  departamentos: Departamento[];
};

const renderListItem = (
  departamento: Departamento,
  atualizarDepartamento: Function,
  removeDepartamento: Function
) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center text-dark">
      {departamento.nome}
      <div style={{ float: "right" }}>
        <CustomModal
          id={`edit-${departamento.id}`}
          popupText="Departamento"
          title="Departamento"
          size={"modal-sm"}
          trigger={
            <button
              type="button"
              className="btn btn-link btn-sm"
              data-toggle="modal"
              data-target={`#${`edit-${departamento.id}`}`}
            >
              <i
                className="bi bi-pencil-fill text-warning"
                style={styles.smallIcon}
              />
            </button>
          }
          content={<DepartamentoForm departamento={departamento} />}
        />

        <button
          type="button"
          className="btn btn-link btn-sm"
          onClick={async () => {
            let response = await removeDepartamentoRequest(departamento);
            if (response) {
              removeDepartamento(departamento);
              notyfSuccess("Departamento removido");
            } else {
              notyfError("Erro ao remover departamento");
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

export default function DepartamentosCardPanel(props: Props) {
  const {
    departamentos,
    setDepartamentos,
    atualizarDepartamento,
    removeDepartamento
  } = useContext(DepartamentoContext);
  const modalId = generateRandomNumber(10);

  useEffect(() => {
    const getDepartamentos = async () => {
      let newDepartamentos = await getDepartamentosRequest();
      setDepartamentos(newDepartamentos);
    };
    getDepartamentos();
  }, []);

  return (
    <div>
      <div
        className="card text-white bg-secondary mb-3"
        style={{ maxWidth: 350 }}
      >
        <div className="card-header">
          <span style={{ float: "left" }}>
            <i className="bi bi-archive text-light" style={styles.mediumIcon} />{" "}
            DEPARTAMENTOS
          </span>
          <span style={{ float: "right" }}>Total: {departamentos.length}</span>
        </div>
        <div className="card-body" style={styles.bodyList}>
          <ul className="list-group">
            {departamentos.length > 0 ? (
              <>
                {departamentos.map(departamento =>
                  renderListItem(
                    departamento,
                    atualizarDepartamento,
                    removeDepartamento
                  )
                )}
              </>
            ) : (
              <div className="alert alert-dismissible alert-light">
                <p className="mb-0">Sem departamentos cadastrados</p>
              </div>
            )}
          </ul>
        </div>

        <div className="card-bottom bg-primary" style={styles.cardBottom}>
          <CustomModal
            id={modalId}
            popupText="Departamento"
            title="Departamento"
            size={"modal-sm"}
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
            content={<DepartamentoForm />}
          />
        </div>
      </div>
    </div>
  );
}

DepartamentosCardPanel.defaultProps = {
  departamentos: []
};
