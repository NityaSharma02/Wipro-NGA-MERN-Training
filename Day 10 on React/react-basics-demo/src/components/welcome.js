// here we will add sample component

// 1. Importing react from 'react'
// 2. create a function that return jsx
// 3. Importing this componet and using it in app.js
// 4. running and building

import React from "react";

function Welcome(props) {
  return (
    <div>
      <h2> Hello, {props.name}</h2>
      <p> Welcome to our first react componet </p>
    </div>
  );
}

// closing fucntion
export default Welcome; // exporting function
