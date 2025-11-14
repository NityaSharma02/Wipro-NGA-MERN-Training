import React from "react";

function HeavyPage() {
  return (
    <div>
      <h2>Heavy Page Loaded!</h2>
      <p>
        {Array(100).fill("This is a heavy content example. ").join(" ")}
      </p>
      <img
        src="https://via.placeholder.com/600x400"
        alt="Heavy placeholder"
      />
    </div>
  );
}

export default HeavyPage;
