import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/11.png'; // Update this path if necessary

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <ul className="menu">
          <li><NavLink exact to="/" activeClassName="active-page">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active-page">About Us</NavLink></li>
          <li><NavLink to="/demoTrade" activeClassName="active-page">DemoTrade</NavLink></li>
          <li><NavLink to="/sip" activeClassName="active-page">Calculator</NavLink></li>
          <li><NavLink to="/courses" activeClassName="active-page">Courses</NavLink></li>
          <li><NavLink to="/quiz" activeClassName="active-page">Quiz</NavLink></li>
        </ul>
        <div className="log">
          <button className="login-btn" onClick={toggleLoginForm}>
            <a href="login">Login</a>
          </button>
          <button className="register-btn">
            <a href="register">Register</a>
          </button>
        </div>
      </nav>
      {showLoginForm && (
        <div className="modal">
          <div className="modal-content">
            {/* Your Login component should be here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
