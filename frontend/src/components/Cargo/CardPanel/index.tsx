import React, { useContext, useEffect } from "react";
import CargoForm from "components/Cargo/Form";
import CustomModal from "components/Global/Modal/CustomModal";
import { Cargo } from "types/Cargo";
import { getCargosRequest, removeCargoRequest } from "requests/Cargo";
import { CargoContext } from "store/contexts/CargoContext";
import { notyfError, notyfSuccess } from "utils/notifications";
import { generateRandomNumber } from "utils/helpers";
import { styles } from "components/Global/Styles";
import AdmissaoForm from "components/Funcionario/Table/Actions/Admissao";

type Props = {
  cargos: Cargo[];
};

const modalId = generateRandomNumber(10);

const renderListItem = (
  cargo: Cargo,
  atualizarCargo: Function,
  removeCargo: Function
) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center text-dark">
      <p>
        <span>{cargo.nome}</span>
        <br />
        <span style={{ fontSize: 12 }}>Dep.:{cargo.departamento?.nome}</span>
      </p>
      <div style={{ float: "right" }}>
        <CustomModal
          id={`edit-${cargo.id}`}
          popupText="Cargo"
          title="Cargo"
          size={"modal-sm"}
          trigger={
            <button
              type="button"
              className="btn btn-link btn-sm"
              data-toggle="modal"
              data-target={`#${`edit-${cargo.id}`}`}
            >
              <i
                className="bi bi-pencil-fill text-warning"
                style={styles.smallIcon}
              />
            </button>
          }
          content={<CargoForm cargo={cargo} />}
        />

        <button
          type="button"
          className="btn btn-link btn-sm"
          onClick={async () => {
            let response = await removeCargoRequest(cargo);
            if (response) {
              removeCargo(cargo);
              notyfSuccess("Cargo removido");
            } else {
              notyfError("Erro ao remover cargo");
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

export default function CargosCardPanel(props: Props) {
  const { cargos, setCargos, atualizarCargo, removeCargo } = useContext(
    CargoContext
  );
  const modalId = generateRandomNumber(10);

  useEffect(() => {
    const getCargos = async () => {
      let newCargos = await getCargosRequest();
      setCargos(newCargos);
    };
    getCargos();
  }, []);

  return (
    <div>
      <div
        className="card text-white bg-warning mb-3"
        style={{ maxWidth: 350 }}
      >
        <div className="card-header">
          <span style={{ float: "left" }}>
            <i
              className="bi bi-briefcase text-light"
              style={styles.mediumIcon}
            />{" "}
            CARGOS
          </span>

          <span style={{ float: "right" }}>Total: {cargos.length}</span>
        </div>
        <div className="card-body" style={styles.bodyList}>
          <ul className="list-group">
            {cargos.length > 0 ? (
              <>
                {cargos.map(cargo =>
                  renderListItem(cargo, atualizarCargo, removeCargo)
                )}
              </>
            ) : (
              <div className="alert alert-dismissible alert-light">
                <p className="mb-0">Sem cargos cadastrados</p>
              </div>
            )}
          </ul>
        </div>

        <div className="card-bottom bg-primary" style={styles.cardBottom}>
          <CustomModal
            id={modalId}
            popupText="Cargo"
            title="Cargo"
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
            content={<AdmissaoForm />}
          />
        </div>
      </div>
    </div>
  );
}

CargosCardPanel.defaultProps = {
  cargos: []
};
