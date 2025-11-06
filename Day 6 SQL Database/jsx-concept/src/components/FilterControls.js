import React from "react";

const FilterControls = ({ onFilter, onMap, onReset }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Actions</h3>
      <button onClick={onFilter} style={btnStyle}>
        Show Even Numbers
      </button>
      <button onClick={onMap} style={btnStyle}>
        Double Numbers
      </button>
      <button onClick={onReset} style={{ ...btnStyle, backgroundColor: "#f44336" }}>
        Reset
      </button>
    </div>
  );
};

const btnStyle = {
  margin: "5px",
  padding: "8px 15px",
  backgroundColor: "#0078ff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default FilterControls;
