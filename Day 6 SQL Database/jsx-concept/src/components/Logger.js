// Logger.js
import React from "react";

function Logger({ numbers }) {
  const logNumbers = () => {
    numbers.forEach((num) => console.log("Logging number:", num));
    alert("Numbers have been logged to console!");
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={logNumbers}>Log Numbers to Console</button>
    </div>
  );
}

export default Logger;
