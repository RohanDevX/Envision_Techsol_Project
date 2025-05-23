import React, { useState } from 'react';
import './Tripnav.css';

const Tripnav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <nav className="tripnav">
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </button>

      <ul className={`tripnav-menu ${menuOpen ? 'open' : ''}`}>
        <li className={`dropdown ${openDropdown === 'north' ? 'active' : ''}`}>
          <span onClick={() => toggleDropdown('north')}>
            North India <span className="arrow">{openDropdown === 'north' ? '▲' : '▼'}</span>
          </span>
          <ul className="dropdown-menu">
            <li>Delhi</li>
            <li>Manali</li>
            <li>Kashmir</li>
          </ul>
        </li>
        <li className={`dropdown ${openDropdown === 'south' ? 'active' : ''}`}>
          <span onClick={() => toggleDropdown('south')}>
            South India <span className="arrow">{openDropdown === 'south' ? '▲' : '▼'}</span>
          </span>
          <ul className="dropdown-menu">
            <li>Kerala</li>
            <li>Ooty</li>
            <li>Kodaikanal</li>
          </ul>
        </li>
        <li className={`dropdown ${openDropdown === 'weekend' ? 'active' : ''}`}>
          <span onClick={() => toggleDropdown('weekend')}>
            Weekend Trips <span className="arrow">{openDropdown === 'weekend' ? '▲' : '▼'}</span>
          </span>
          <ul className="dropdown-menu">
            <li>Goa</li>
            <li>Pondicherry</li>
            <li>Lonavala</li>
          </ul>
        </li>
        <li className={`dropdown ${openDropdown === 'international' ? 'active' : ''}`}>
          <span onClick={() => toggleDropdown('international')}>
            International Trip <span className="arrow">{openDropdown === 'international' ? '▲' : '▼'}</span>
          </span>
          <ul className="dropdown-menu">
            <li>Dubai</li>
            <li>Singapore</li>
            <li>Thailand</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Tripnav;
