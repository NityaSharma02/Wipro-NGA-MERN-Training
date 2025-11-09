// this component is responsible for showing aboutus page 

// src/pages/About.jsx
// src/pages/about.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>About Us</h2>
      <p>This page describes our app and its features.</p>

      <h3>Key Benefits of Using React Router in This Application:</h3>
      <ul>
        <li>Smooth navigation between pages without reloading (SPA).</li>
        <li>Active link styling shows which page is currently active.</li>
        <li>Centralized navigation bar for easy page switching.</li>
        <li>Custom 404 (NotFound) page for invalid routes.</li>
        <li>Clean and maintainable route definitions using JSX.</li>
        <li>Easy scalability for adding new pages later.</li>
      </ul>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "16px",
          padding: "8px 16px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ⬅ Go Back to Home
      </button>
    </div>
  );
}
