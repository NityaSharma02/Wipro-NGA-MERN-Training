import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerServiceWorker } from "./serviceWorkerRegistration";
import { Provider } from "react-redux";
import store from "./store/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Register service worker only once
registerServiceWorker();

// simple offline indicator
window.addEventListener("offline", () => {
  const banner = document.createElement("div");
  banner.id = "offline-banner";
  banner.textContent = "You are offline — some features may be unavailable";
  banner.style =
    "position:fixed;left:0;right:0;top:0;background:#ffdd57;padding:8px;text-align:center;z-index:9999";
  document.body.appendChild(banner);
});

window.addEventListener("online", () => {
  const b = document.getElementById("offline-banner");
  if (b) b.remove();
});
