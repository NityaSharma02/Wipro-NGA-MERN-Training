import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from React.

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    
    /* ================= 1. Functional Component (with Hooks) ================= */
  function FunctionalComponent({ defaultName = "Guest" }: { defaultName?: string }) {
    const [name, setName] = useState(defaultName);
    useEffect(() => {
      console.log("FunctionalComponent mounted/updated — name =", name);
    }, [name]);
    return (
      <div className="card">
        <h3>Functional Component</h3>
        <p>Hello, {name}!</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    );
  }

  /* ================= 2. Class Component ================= */
// Creating an interface 
interface ClassComponentProps {
  defaultCount?: number;
}
interface ClassComponentState {
  count: number;
}
//Crating a class that inherits above interface 
class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  constructor(props: ClassComponentProps) { // used for inilization default values
    super(props);
    this.state = { count: props.defaultCount ?? 0 };
  }
  render() {
    return ( // returning UI 
      <div className="card">
        <h3>Class Component</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default App
