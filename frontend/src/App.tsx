import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "routes";
import { HashRouter } from "react-router-dom";
import DepartamentoProvider from "store/contexts/DepartamentoContext";
import CargoProvider from "store/contexts/CargoContext";
import UsuarioProvider from "store/contexts/UsuarioContext";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <DepartamentoProvider>
          <CargoProvider>
            <UsuarioProvider>
              <Routes />
            </UsuarioProvider>
          </CargoProvider>
        </DepartamentoProvider>
      </HashRouter>
    </div>
  );
}

export default App;
