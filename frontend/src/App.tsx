import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "routes";
import { HashRouter } from "react-router-dom";
import DepartamentoProvider from "store/contexts/DepartamentoContext";
import CargoProvider from "store/contexts/CargoContext";
import UsuarioProvider from "store/contexts/UsuarioContext";
import FuncionarioProvider from "store/contexts/FuncionarioContext";
import AuthProvider from "store/contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AuthProvider>
          <DepartamentoProvider>
            <CargoProvider>
              <UsuarioProvider>
                <FuncionarioProvider>
                  <Routes />
                </FuncionarioProvider>
              </UsuarioProvider>
            </CargoProvider>
          </DepartamentoProvider>
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;
