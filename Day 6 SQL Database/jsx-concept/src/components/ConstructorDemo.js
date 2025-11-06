// ConstructorDemo.js
import React, { useEffect } from "react";

function ConstructorDemo() {
  useEffect(() => {
    console.log("---- Constructor Demo ----");

    // Constructor function
    function Person(name, age) {
      this.name = name;
      this.age = age;
      this.greet = function () {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
      };
    }

    const person1 = new Person("Nitya", 21);
    person1.greet();

  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Constructor Demo (check console)</h3>
    </div>
  );
}

export default ConstructorDemo;
