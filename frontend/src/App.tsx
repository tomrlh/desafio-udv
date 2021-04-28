import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "routes";
import { HashRouter } from "react-router-dom";
import DepartamentoProvider from "store/contexts/DepartamentoContext";
import CargoProvider from "store/contexts/CargoContext";
import UsuarioProvider from "store/contexts/UsuarioContext";
import FuncionarioProvider from "store/contexts/FuncionarioContext";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <DepartamentoProvider>
          <CargoProvider>
            <UsuarioProvider>
              <FuncionarioProvider>
                <Routes />
              </FuncionarioProvider>
            </UsuarioProvider>
          </CargoProvider>
        </DepartamentoProvider>
      </HashRouter>
    </div>
  );
}

export default App;
