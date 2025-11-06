import React, { useState } from "react";
import NumberList from "./components/NumberList";
import FilterControls from "./components/FilterControls";
import Logger from "./components/Logger";
import HoistingDemo from "./components/HoistingDemo";
import ConstructorDemo from "./components/ConstructorDemo";

function App() {
  const originalNumbers = [1, 2, 3, 4, 5, 6];
  const [numbers, setNumbers] = useState(originalNumbers);

  const handleFilter = () => {
    setNumbers(numbers.filter((num) => num % 2 === 0));
  };

  const handleMap = () => {
    setNumbers(numbers.map((num) => num * 2));
  };

  const handleReset = () => {
    setNumbers(originalNumbers);
  };

  return (
    <div
      className="App"
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1 style={{ color: "#333" }}>JSX and JavaScript Concepts Sprint</h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          width: "400px",
          margin: "20px auto",
        }}
      >
        <FilterControls
          onFilter={handleFilter}
          onMap={handleMap}
          onReset={handleReset}
        />
        <NumberList numbers={numbers} />
        <Logger numbers={numbers} />
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          width: "400px",
          margin: "20px auto",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <HoistingDemo />
        <ConstructorDemo />
      </div>
    </div>
  );
}

export default App;
