import logo from './logo.svg';
import { Routes, Route, NavLink } from "react-router-dom";
import './App.css';

// importing pages
import Home from './pages/home';
import About from './pages/about';
import ContactUs from './pages/contactUs';
import NotFound from './pages/notfound';

function App() {
  return (
    <div className="app">
      <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <NavLink to="/" end style={({isActive})=>({marginRight:12, color: isActive? 'blue':'black'})}>Home</NavLink>
        <NavLink to="/contactUs" style={({isActive})=>({marginRight:12, color: isActive? 'blue':'black'})}>Contact Us</NavLink>
        <NavLink to="/about" style={({isActive})=>({color: isActive? 'blue':'black'})}>About Us</NavLink>
      </nav>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
