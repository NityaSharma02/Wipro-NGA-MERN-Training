// HoistingDemo.js
import React, { useEffect } from "react";

function HoistingDemo() {
  useEffect(() => {
    console.log("---- Hoisting Demo ----");

    // Variable hoisting
    console.log(a); // undefined (due to hoisting)
    var a = 10;
    console.log(a); // 10

    // Function hoisting
    hoistedFunction(); // works
    function hoistedFunction() {
      console.log("This function is hoisted!");
    }

    // Uncommenting the below will cause error (let and const are not hoisted)
    // console.log(b);
    // let b = 5;
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Hoisting Demo (check console)</h3>
    </div>
  );
}

export default HoistingDemo;
