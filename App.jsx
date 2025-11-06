import React from 'react';
import Login from './components/login/login';
import './App.css';
import logo from "./assets/logocopy.jpg";


function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Company logo" className="logo" /> 
          <h2 className="logo-name">Combo Square</h2>
        </div>

        <div className="nav-right">
          <a href="#">Domains</a>
          <a href="#">Contact</a>
          <a href="#">Career</a>
          <a href="#">Login / SignUp</a>
        </div>
      </nav>

      <div className="main-container">
        <Login />
      </div>
    </>
  );
}

export default App;
