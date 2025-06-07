import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="main-header">
      <div className="logo">
        <span className="logo-icon">🌍</span>
        <span className="logo-text">
          Travel<span className="highlight">Hub</span>
        </span>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {/* Simple hamburger lines */}
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <nav className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <ul className="right-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMenuOpen(false)} // close menu on link click
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payment"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Payment
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
