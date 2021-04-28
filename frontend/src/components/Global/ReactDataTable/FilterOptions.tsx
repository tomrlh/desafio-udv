import React, { useEffect, useState } from "react";

type Props = {
  activeFilter: string;
  setActiveFilter: Function;
  filterOptions: FilterOption[];
};

type FilterOption = {
  property: string;
  label: string;
};

export default function PropsFilter(props: Props) {
  const [hoverStyle, setHoverStyle] = useState("");

  const renderStyle = (filterToCheck: string) => {
    return props.activeFilter === filterToCheck
      ? "badge badge-primary"
      : "badge badge-secondary";
  };

  const renderFilter = (filterOption: FilterOption) => (
    <span
      key={filterOption.label + filterOption.property}
      className={renderStyle(filterOption.property)}
      style={{ cursor: hoverStyle, marginLeft: "5px" }}
      onMouseEnter={() => setHoverStyle("pointer")}
      onMouseLeave={() => setHoverStyle("none")}
      onClick={() => props.setActiveFilter(filterOption.property)}
    >
      {filterOption.label}
    </span>
  );

  useEffect(() => {
    // just to set the first filter as active
    props.setActiveFilter(props.filterOptions[0].property);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={styles.container} className="zIndex2">
      <h5 style={styles.header}>
        Filtros <i className="filter icon"></i>
      </h5>

      <div style={styles.options}>
        {props.filterOptions.map((option) => renderFilter(option))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    float: "right" as const,
    marginBottom: -50,
  },
  options: {
    display: "flex",
    justifyContent: "center",
  },
  header: {
    textAlign: "center" as const,
  },
};
