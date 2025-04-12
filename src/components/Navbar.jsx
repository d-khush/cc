import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Career Compass</div>
      <ul className="nav-links">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/quiz">Skill Quiz</Link></li>
        <li><Link to="/suggestions">Suggestions</Link></li>
        <li><Link to="/resume-tips">Resume Tips</Link></li>
        <li><Link to="/advisor">Advisor</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/login" className="login-btn">Log In</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;