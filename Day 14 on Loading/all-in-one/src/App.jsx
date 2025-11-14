
import React, { useState, Suspense } from "react";
import Home from "./pages/Home";
import PureDisplay from "./components/PureDisplay";
import ErrorBoundary from "./components/ErrorBoundary";
import PortalHost from "./components/PortalHost";
import ModalPortal from "./components/ModalPortal";

// Lazy load HeavyPage
const HeavyPage = React.lazy(() => import("./pages/HeavyPage"));

function App() {
  const [showHeavy, setShowHeavy] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [throwError, setThrowError] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Demo</h1>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setShowHeavy(true)}>Lazy Load</button>
        <button onClick={() => setThrowError(true)}>Error Boundary</button>
        <button onClick={() => setShowModal(true)}>Portal (Modal)</button>
        <button>Pure Component</button>
      </nav>

      <Suspense fallback={<div>Loading heavy page...</div>}>
        {showHeavy && <HeavyPage />}
      </Suspense>

      <ErrorBoundary>
        {throwError && <ComponentThatThrows />}
      </ErrorBoundary>

      <PureDisplay message="This is a Pure Component" />

      <PortalHost>
        {showModal && <ModalPortal onClose={() => setShowModal(false)} />}
      </PortalHost>
    </div>
  );
}

function ComponentThatThrows() {
  throw new Error("This is a test error!");
}

export default App;
