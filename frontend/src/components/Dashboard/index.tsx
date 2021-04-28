import CargosCardPanel from "components/Cargo/CardPanel";
import DepartamentosCardPanel from "components/Departamento/CardPanel";
import UsuariosCardPanel from "components/Usuario/CardPanel";
import React from "react";

export default function Dashboard() {
  return (
    <div className="container">
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
      </div>
    </div>
  );
}
