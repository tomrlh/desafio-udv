import React from "react";
import FilterComponent from "./FilterInput";

type Props = {
  filterText: string;
  setFilterText: Function;
  resetPaginationToggle: boolean;
  setResetPaginationToggle: Function;
};

const SubHeaderComponent = (props: Props) =>
  React.useMemo(() => {
    const handleClear = () => {
      if (props.filterText) {
        props.setResetPaginationToggle(!props.resetPaginationToggle);
        props.setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e: { target: { value: React.SetStateAction<string> } }) =>
          props.setFilterText(e.target.value)
        }
        onClear={handleClear}
        filterText={props.filterText}
      />
    );
  }, [props]);

export default SubHeaderComponent;
