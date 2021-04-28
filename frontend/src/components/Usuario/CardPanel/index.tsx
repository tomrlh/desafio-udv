import React, { useContext, useEffect } from "react";
import UsuarioForm from "components/Usuario/Form";
import CustomModal from "components/Global/Modal/CustomModal";
import { Usuario } from "types/Usuario";
import { getUsuariosRequest, removeUsuarioRequest } from "requests/Usuario";
import { UsuarioContext } from "store/contexts/UsuarioContext";
import { notyfError, notyfSuccess } from "utils/notifications";
import { generateRandomNumber } from "utils/helpers";
import { styles } from "components/Global/Styles";

type Props = {
  usuarios: Usuario[];
};

const modalId = generateRandomNumber(10);

const renderListItem = (
  usuario: Usuario,
  atualizarUsuario: Function,
  removeUsuario: Function
) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center text-dark">
      {usuario.name}
      <div style={{ float: "right" }}>
        <CustomModal
          id={`edit-${usuario.id}`}
          popupText="Usuario"
          title="Usuario"
          size={"modal-sm"}
          trigger={
            <button
              type="button"
              className="btn btn-link btn-sm"
              data-toggle="modal"
              data-target={`#${`edit-${usuario.id}`}`}
            >
              <i
                className="bi bi-pencil-fill text-warning"
                style={styles.smallIcon}
              />
            </button>
          }
          content={<UsuarioForm usuario={usuario} />}
        />

        <button
          type="button"
          className="btn btn-link btn-sm"
          onClick={async () => {
            let response = await removeUsuarioRequest(usuario);
            if (response) {
              removeUsuario(usuario);
              notyfSuccess("Usuario removido");
            } else {
              notyfError("Erro ao remover usuario");
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

export default function UsuariosCardPanel(props: Props) {
  const { usuarios, setUsuarios, atualizarUsuario, removeUsuario } = useContext(
    UsuarioContext
  );
  const modalId = generateRandomNumber(10);

  useEffect(() => {
    const getUsuarios = async () => {
      let newUsuarios = await getUsuariosRequest();
      console.log("assdasdasda", newUsuarios);
      setUsuarios([...newUsuarios]);
    };
    getUsuarios();
  }, []);

  return (
    <div>
      <div className="card text-white bg-info mb-3" style={{ maxWidth: 350 }}>
        <div className="card-header">
          <span style={{ float: "left" }}>
            <i
              className="bi bi-person-circle text-light"
              style={styles.mediumIcon}
            />{" "}
            USUÁRIOS
          </span>
          <span style={{ float: "right" }}>Total: {usuarios.length}</span>
        </div>
        <div className="card-body" style={styles.bodyList}>
          <ul className="list-group">
            {usuarios && usuarios.length > 0 ? (
              <>
                {usuarios.map(usuario =>
                  renderListItem(usuario, atualizarUsuario, removeUsuario)
                )}
              </>
            ) : (
              <div className="alert alert-dismissible alert-light">
                <p className="mb-0">Sem usuarios cadastrados</p>
              </div>
            )}
          </ul>
        </div>

        <div className="card-bottom bg-primary" style={styles.cardBottom}>
          <CustomModal
            id={modalId}
            popupText="Usuario"
            title="Usuario"
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
            content={<UsuarioForm />}
          />
        </div>
      </div>
    </div>
  );
}

UsuariosCardPanel.defaultProps = {
  usuarios: []
};
