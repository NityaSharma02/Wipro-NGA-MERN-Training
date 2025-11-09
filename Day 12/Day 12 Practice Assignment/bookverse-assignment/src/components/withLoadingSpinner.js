import React, { useState, useEffect } from "react";

// HOC that shows a bootstrap spinner until the wrapped component indicates it's ready.
// Usage: export default withLoadingSpinner(MyComponent)
export default function withLoadingSpinner(WrappedComponent) {
  return function WithSpinner(props) {
    // We use a small heuristic: if WrappedComponent uses data fetching, it may render null
    // initially — we show spinner until it mounts and content appears.
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
      // hide spinner after a small delay so UX feels smooth even for fast loads
      const t = setTimeout(() => setShowSpinner(false), 700);
      return () => clearTimeout(t);
    }, []);

    // If spinner should still show, show bootstrap spinner centered
    if (showSpinner) {
      return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 40 }}>
          <div className="spinner-border" role="status" aria-hidden="true"></div>
          <span className="ms-2">Loading...</span>
        </div>
      );
    }

    // otherwise render wrapped component normally
    return <WrappedComponent {...props} />;
  };
}
