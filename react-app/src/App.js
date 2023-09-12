import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Routes
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
    </div>
  );
}

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Me</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes> {/* Use Routes to define your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
