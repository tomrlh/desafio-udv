import React, { useContext, useEffect, useState } from "react";
import {
  atualizarFuncionarioRequest,
  saveFuncionarioRequest
} from "requests/Funcionario";
import { FuncionarioContext } from "store/contexts/FuncionarioContext";
import { Funcionario } from "types/Funcionario";
import { notyfError, notyfErrors, notyfSuccess } from "utils/notifications";
import InputMask from "react-input-mask";

type Props = {
  funcionario: Funcionario;
};

export default function FuncionarioForm(props: Props) {
  const { addFuncionario, atualizarFuncionario } = useContext(
    FuncionarioContext
  );
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");

  const [telefones, setTelefones] = useState<any>([]);
  const [telefoneToAdd, setTelefoneToAdd] = useState("");

  const [enderecos, setEnderecos] = useState<any>([]);
  const [enderecoToAdd, setEnderecoToAdd] = useState("");

  const removeTelefone = (index: number) => {
    telefones.splice(index, 1);
    setTelefones([...telefones]);
  };

  const removeEndereco = (index: number) => {
    enderecos.splice(index, 1);
    setEnderecos([...enderecos]);
  };

  const clearForm = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setDataNascimento("");
    setSexo("");
    setTelefoneToAdd("");
    setEnderecoToAdd("");
    setTelefones([]);
    setEnderecos([]);
  };

  const submit = async () => {
    let novoFuncionario = {
      nome,
      email,
      senha,
      data_nascimento: dataNascimento,
      sexo: sexo,
      telefones,
      enderecos
    } as Funcionario;

    let response = null;

    if (props.funcionario) {
      novoFuncionario.id = props.funcionario.id;
      response = await atualizarFuncionarioRequest(novoFuncionario);
      if (response) {
        atualizarFuncionario(novoFuncionario);
        notyfSuccess("Funcionario atualizado");
      } else {
        notyfError("Erro ao atualizar funcionario");
      }
    } else {
      response = await saveFuncionarioRequest(novoFuncionario);
      if (response.errors) {
        notyfErrors(response);
      } else {
        notyfSuccess("Funcionario cadastrado");
        addFuncionario(response);
        clearForm();
      }
    }
  };

  useEffect(() => {
    if (props.funcionario) {
      setNome(props.funcionario.nome ? props.funcionario.nome : "");
      setEmail(props.funcionario.email ? props.funcionario.email : "");
      setSenha(props.funcionario.senha ? props.funcionario.senha : "");
      setSexo(props.funcionario.sexo ? props.funcionario.sexo : "");
      console.log(props.funcionario.sexo);
      setDataNascimento(
        props.funcionario.data_nascimento
          ? props.funcionario.data_nascimento
          : ""
      );
      setTelefones(
        props.funcionario.telefones?.map(telefone => telefone.telefone)
      );
      setEnderecos(
        props.funcionario.enderecos?.map(endereco => endereco.endereco)
      );
    }
  }, []);

  return (
    <div>
      <fieldset>
        <div className="row">
          <div className="col-md-6">
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
            </div>

            <div className="form-group">
              <label className="control-label">Data de Nascimento</label>
              <div className="input-group mb-3">
                <InputMask
                  className="form-control"
                  mask="99/99/9999"
                  value={dataNascimento}
                  onChange={e => {
                    setDataNascimento(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="perfilSelect">Sexo</label>
              <select
                className="form-control"
                id="perfilSelect"
                onChange={e => {
                  setSexo(e.target.value);
                }}
              >
                <option selected value="M">
                  Masculino
                </option>
                <option value="F">Feminino</option>
              </select>
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
                  <div
                    className="input-group-append"
                    style={styles.addTelefone}
                  >
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
                    {telefones &&
                      telefones.map((telefone: any, idx: number) => (
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
              </div>
            </div>

            <div className="form-group">
              <label className="control-label">Enderecos</label>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    maxLength={14}
                    value={enderecoToAdd}
                    onChange={e => {
                      setEnderecoToAdd(e.target.value);
                    }}
                  />
                  <div
                    className="input-group-append"
                    style={styles.addTelefone}
                  >
                    <span
                      className="input-group-text"
                      onClick={() => {
                        if (enderecoToAdd === "") return;
                        enderecos.push(enderecoToAdd);
                        setEnderecoToAdd("");
                        setEnderecos([...enderecos]);
                      }}
                    >
                      <i className="bi bi-plus-circle-fill text-success" />
                    </span>
                  </div>
                </div>
              </div>

              <div style={styles.bodyList}>
                <ul className="list-group">
                  {enderecos &&
                    enderecos.map((endereco: any, idx: number) => (
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={idx}
                      >
                        {typeof endereco === "object"
                          ? endereco.endereco
                          : endereco}
                        <span
                          className="badge badge-primary badge-pill"
                          style={styles.addTelefone}
                          onClick={() => removeEndereco(idx)}
                        >
                          X
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
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

FuncionarioForm.defaultProps = {
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
