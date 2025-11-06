import React from "react";

const NumberList = ({ numbers }) => {
  return (
    <div>
      <h2>Number List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {numbers.map((num, index) => (
          <li
            key={index}
            style={{
              margin: "5px auto",
              width: "100px",
              padding: "8px",
              backgroundColor: "#e3f2fd",
              borderRadius: "5px",
            }}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
