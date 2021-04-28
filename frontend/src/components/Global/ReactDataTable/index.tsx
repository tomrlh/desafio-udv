import React from "react";
import DataTable from "react-data-table-component";
import { DataTableEnum } from "./constants";
import SubHeaderComponent from "./SubHeaderComponent";

type Props = {
  title: string;
  columns: any;
  data: any;
  filterBy: string;
  filterItems: Function;
};

const ReactDataTable = (props: Props) => {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );

  return (
    <DataTable
      title={props.title}
      columns={props.columns}
      data={props.filterItems(props.data, props.filterBy, filterText)}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      style={{
        marginTop: "-30px",
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
        alignItems: "center",
        flexDirection: "row"
      }}
      subHeaderComponent={
        <SubHeaderComponent
          filterText={filterText}
          setFilterText={setFilterText}
          resetPaginationToggle={resetPaginationToggle}
          setResetPaginationToggle={setResetPaginationToggle}
        />
      }
      persistTableHead
      paginationComponentOptions={{
        rowsPerPageText: DataTableEnum.LINES_PER_PAGE,
        rangeSeparatorText: DataTableEnum.OF,
        noRowsPerPage: false,
        selectAllRowsItem: false,
        selectAllRowsItemText: DataTableEnum.ALL
      }}
      noDataComponent={DataTableEnum.NO_DATA}
      paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
    />
  );
};

export default ReactDataTable;

ReactDataTable.defaultProps = {
  data: []
};
