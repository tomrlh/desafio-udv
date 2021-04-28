import CustomModal from "components/Global/Modal/CustomModal";
import ReactDataTable from "components/Global/ReactDataTable";
import PropsFilter from "components/Global/ReactDataTable/PropsFilter";
import { styles } from "components/Global/Styles";
import React, { useState } from "react";
import { Funcionario } from "types/Funcionario";
import { findSituacaoColor } from "utils/helpers";
import AdmissaoForm from "./Actions/Admissao";
import AumentoForm from "./Actions/Aumento/Form";
import PromocaoForm from "./Actions/Promocao/Form";
import SituacaoForm from "./Actions/Situacao/Form";
import { filterItems, filterOptions } from "./functions";

type Props = {
  funcionarios: Funcionario[];
};

const columns = [
  {
    name: "Nome",
    selector: "nome",
    sortable: true,
    cell: (row: Funcionario) => <>{row && row.nome}</>
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
    cell: (row: Funcionario) => <>{row && row.email}</>
  },
  {
    name: "Data Nasc.",
    selector: "data_nascimento",
    sortable: true,
    cell: (row: Funcionario) => <>{row && row.data_nascimento}</>
  },
  {
    name: "Sexo",
    selector: "sexo",
    sortable: true,
    cell: (row: Funcionario) => <>{row && row.sexo}</>
  },
  {
    name: "Situação",
    selector: "situacao",
    sortable: true,
    cell: (row: Funcionario) => (
      <>
        {row && row.situacao && (
          <span
            className={`badge ${findSituacaoColor(row.situacao)}`}
            style={localStyles.situacaoFontSize}
          >
            {row.situacao}
          </span>
        )}
      </>
    )
  },
  {
    name: "Categoria",
    selector: "categoria",
    sortable: true,
    cell: (row: Funcionario) => <>{row && row.categoria}</>
  },
  {
    name: "Salário",
    selector: "salario",
    sortable: true,
    cell: (row: Funcionario) => <>{row && row.salario}</>
  },
  {
    name: "",
    button: true,
    minWidth: "300px",
    cell: (row: Funcionario) => (
      <div style={localStyles.actionButtonContainer}>
        {!row.situacao && (
          <CustomModal
            id={`admissao-${row.id}`}
            title="Admissão"
            size={"modal-sm"}
            trigger={
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target={`#${`admissao-${row.id}`}`}
              >
                <i className="bi bi-plus-circle" /> ADMITIR
              </button>
            }
            content={<AdmissaoForm funcionario={row} />}
          />
        )}{" "}
        {row.situacao && (
          <CustomModal
            id={`situacao-${row.id}`}
            title="Situação"
            size={"modal-sm"}
            trigger={
              <button
                type="button"
                className="btn btn-warning btn-sm"
                data-toggle="modal"
                data-target={`#${`situacao-${row.id}`}`}
              >
                <i className="bi bi-clipboard-data" /> SITUAÇÃO
              </button>
            }
            content={<SituacaoForm funcionario={row} />}
          />
        )}{" "}
        {row.situacao && (
          <CustomModal
            id={`promocao-${row.id}`}
            title="Promoção"
            size={"modal-sm"}
            trigger={
              <button
                type="button"
                className="btn btn-info btn-sm"
                data-toggle="modal"
                data-target={`#${`promocao-${row.id}`}`}
              >
                <i className="bi bi-capslock" style={styles.smallIcon} />
              </button>
            }
            content={<PromocaoForm funcionario={row} />}
          />
        )}{" "}
        {row.situacao && (
          <CustomModal
            id={`aumento-${row.id}`}
            title="Aumento"
            size={"modal-sm"}
            trigger={
              <button
                type="button"
                className="btn btn-success btn-sm"
                data-toggle="modal"
                data-target={`#${`aumento-${row.id}`}`}
              >
                <i className="bi bi-cash" style={styles.smallIcon} />
              </button>
            }
            content={<AumentoForm funcionario={row} />}
          />
        )}{" "}
      </div>
    )
  }
];

const FuncionariosTable = (props: Props) => {
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <div className="container">
      <PropsFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filterOptions={filterOptions}
      />

      <ReactDataTable
        title="Operações"
        columns={columns}
        data={props.funcionarios}
        filterBy={activeFilter}
        filterItems={filterItems}
      />
    </div>
  );
};

export default FuncionariosTable;

FuncionariosTable.defaultProps = {
  funcionarios: []
};

const localStyles = {
  actionButtonContainer: {
    padding: 5
  },
  situacaoFontSize: {
    fontSize: 11
  }
};
