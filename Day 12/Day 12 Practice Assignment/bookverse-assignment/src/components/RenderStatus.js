
/*
 * Simple Render Props component.
 */
export default function RenderStatus({ children }) {
  const status = { isLoading: false, message: "ready" };
  return children(status);
}
