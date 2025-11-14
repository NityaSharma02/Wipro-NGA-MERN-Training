import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import WorkoutTracker from "../components/WorkoutTracker";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <section>
      <h2>Welcome</h2>
      <p>Current theme: <strong>{theme}</strong></p>

      <div style={{
        padding: 12,
        borderRadius: 8,
        background: "var(--card-bg)",
        boxShadow: "var(--card-shadow)"
      }}>
        <WorkoutTracker />
      </div>
    </section>
  );
}
