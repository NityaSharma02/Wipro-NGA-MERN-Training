import React, { useEffect, useState } from "react";

function PortalHost({ children }) {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    setContainer(div);
    return () => document.body.removeChild(div);
  }, []);

  return container ? ReactDOM.createPortal(children, container) : null;
}

export default PortalHost;
