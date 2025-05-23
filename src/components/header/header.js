import React from "react";
import "./header.css";
// import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="main-header">
     <div className="logo">
  <span className="logo-icon">🌍</span>
  <span className="logo-text">Travel<span className="highlight">Hub</span></span>
</div>

      <nav className="menu">
        <ul className="right-menu">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About Us</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active-link' : ''}>Blog</NavLink></li>
           <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
           <li><NavLink to="/payment" className={({ isActive }) => isActive ? 'active-link' : ''}>Payment</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
