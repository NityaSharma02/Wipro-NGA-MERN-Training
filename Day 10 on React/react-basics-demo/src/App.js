import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome";
import Contactus from "./components/contactus";

function App() {
  const user = "new visitor";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1> Fucntion Component Demo</h1>
          <Welcome name="Captain America" />
          <Welcome name="Spider Man" />
          <Welcome name="Bat Man" />
        </p>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div>
        <h1> Welcome, {user} </h1>
        <p>This is JSX demo in action</p>
        <p>JSX should return single parent element</p>
        <p>JSX expression go in between {}</p>
        <p>Attribute in JSX use camel casing (className, onclick)</p>

        <h2>There are two types of component</h2>
        <ol>
          <li>Functional Component- SImple JS fucntion, return JSX</li>
          <li>
            Class Component - As per ES6 classes with lifecycle methods and
            state
          </li>
        </ol>

        <h2> Calling contact us component </h2>
        <Contactus> This data is coming from react component created via CLI</Contactus>
      </div>
    </div>
  );
}

export default App;
