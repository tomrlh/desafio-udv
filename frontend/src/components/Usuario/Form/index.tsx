import React, { useContext, useEffect, useState } from "react";
import { atualizarUsuarioRequest, saveUsuarioRequest } from "requests/Usuario";
import { getDepartamentosRequest } from "requests/Departamento";
import { UsuarioContext } from "store/contexts/UsuarioContext";
import { DepartamentoContext } from "store/contexts/DepartamentoContext";
import { Usuario } from "types/Usuario";
import { notyfError, notyfErrors, notyfSuccess } from "utils/notifications";

type Props = {
  usuario: Usuario;
};

export default function UsuarioForm(props: Props) {
  const { addUsuario, atualizarUsuario } = useContext(UsuarioContext);
  const { departamentos, setDepartamentos } = useContext(DepartamentoContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [perfilId, setPerfilId] = useState(0);

  const clearForm = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setPerfilId(0);
  };

  const submit = async () => {
    let novoUsuario = {
      name: nome,
      email,
      password: senha,
      perfil_id: perfilId
    } as Usuario;

    let response = null;

    if (props.usuario) {
      novoUsuario.id = props.usuario.id;
      response = await atualizarUsuarioRequest(novoUsuario);
      if (response) {
        atualizarUsuario(response);
        notyfSuccess("Usuario atualizado");
      } else {
        notyfError("Erro ao atualizar usuario");
      }
    } else {
      response = await saveUsuarioRequest(novoUsuario);
      console.log("RESPON", response);
      if (response.errors) {
        notyfErrors(response);
      } else {
        notyfSuccess("Usuario cadastrado");
        addUsuario(response);
        clearForm();
      }
    }
  };

  useEffect(() => {
    if (props.usuario) {
      setNome(props.usuario.name);
      setEmail(props.usuario.email);
      setSenha(props.usuario.password);
      setPerfilId(props.usuario.perfil_id);
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
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label className="control-label">Senha</label>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              value={senha}
              onChange={e => {
                setSenha(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="perfilSelect">Perfil</label>
            <select
              className="form-control"
              id="perfilSelect"
              onChange={e => {
                console.log(Number(e.target.value));
                setPerfilId(Number(e.target.value));
              }}
            >
              <option selected value="0">
                Selecione
              </option>
              <option value="1">Administrador</option>
              <option value="2">Supervisor</option>
              <option value="3">Funcionário</option>
            </select>
          </div>

          <button
            type="button"
            className="btn btn-success btn-lg btn-block"
            onClick={submit}
          >
            {props.usuario ? "Atualizar" : "Cadastrar"}
          </button>
        </div>
      </fieldset>
    </div>
  );
}

UsuarioForm.defaultProps = {
  usuario: null
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
