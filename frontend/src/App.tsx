import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "routes";
import { HashRouter } from "react-router-dom";
import DepartamentoProvider from "store/contexts/DepartamentoContext";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <DepartamentoProvider>
          <Routes />
        </DepartamentoProvider>
      </HashRouter>
    </div>
  );
}

export default App;
