import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import ProductsAdmin from "./components/ProductsAdmin";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ maxWidth: 900, margin: "24px auto", padding: 16 }}>
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20
        }}>
          <h1 style={{ margin: 0 }}>Simple React App</h1>
          <ThemeToggle />
        </header>

        <main>
          <Home />
          <hr style={{ margin: "24px 0" }} />
          <ProductsAdmin />
        </main>
      </div>
    </ThemeProvider>
  );
}
