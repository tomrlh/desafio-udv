/* eslint-disable jsx-a11y/img-redundant-alt */
import CargosCardPanel from "components/Cargo/CardPanel";
import DepartamentosCardPanel from "components/Departamento/CardPanel";
import UsuariosCardPanel from "components/Usuario/CardPanel";
import FuncionariosCardPanel from "components/Funcionario/CardPanel";
import React, { useContext, useEffect } from "react";
import FuncionariosTable from "components/Funcionario/Table";
import { getFuncionariosRequest } from "requests/Funcionario";
import { FuncionarioContext } from "store/contexts/FuncionarioContext";

export default function Dashboard() {
  const { funcionarios, setFuncionarios } = useContext(FuncionarioContext);

  useEffect(() => {
    const getFuncionarios = async () => {
      let newFuncionarios = await getFuncionariosRequest();
      setFuncionarios([...newFuncionarios]);
    };
    getFuncionarios();
  }, []);

  return (
    <div className="container">
      <img
        width={100}
        src="/udv-logo.jpeg"
        className="img-fluid"
        alt="Responsive image"
      ></img>

      <h3>Cadastro de Funcionários</h3>
      <h6>
        Desafio para cargo de Analista de Desenvolvimento de Sistemas - CEBUDV
      </h6>

      <div className="row">
        <div className="col-md-6">
          <DepartamentosCardPanel />
        </div>

        <div className="col-md-6">
          <CargosCardPanel />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <UsuariosCardPanel />
        </div>

        <div className="col-md-6">
          <FuncionariosCardPanel />
        </div>
      </div>

      <div className="row">
        <FuncionariosTable funcionarios={funcionarios} />
      </div>
    </div>
  );
}
