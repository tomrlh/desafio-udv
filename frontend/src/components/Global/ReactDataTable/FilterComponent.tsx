import React from "react";

type Props = {
  filterText: string;
  onFilter: any;
  onClear: Function;
};

const FilterComponent = (props: Props) => (
  <>
    <div className="form-group">
      <div className="input-group mb-3">
        <input
          id="search"
          type="text"
          placeholder="Fitrar"
          className="form-control"
          aria-label="Search Input"
          value={props.filterText}
          onChange={props.onFilter}
        />
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.onClear()}
          >
            X
          </button>
        </div>
      </div>
    </div>
  </>
);

export default FilterComponent;
