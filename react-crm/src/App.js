import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Route, Routes, Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            CACACA <code>src/App.js</code> and save to tralala.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/asf">Home</Link>
          <Link to="/tabel">Tabel</Link>
        </header>
        <Routes>
          <Route exact path="/asf" element={<Home/>}/>
          <Route exact path="/tabel" element={<Tabel/>}/>
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home cacamaca</h2>;
}

function Tabel() {
  return <h2>Tabel cacamaca</h2>;
}


export default App;
