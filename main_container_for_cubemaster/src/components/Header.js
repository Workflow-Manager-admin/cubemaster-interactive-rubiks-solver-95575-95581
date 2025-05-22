import React from 'react';
import './Header.css';

/**
 * Header component for the CubeMaster application
 * Displays the app title and navigation elements
 */
const Header = () => {
  return (
    <header className="cube-header">
      <div className="logo">
        <span className="logo-symbol">▣</span> CubeMaster
      </div>
      <nav className="nav-links">
        <button className="btn">Solve</button>
        <button className="btn">Tutorial</button>
        <button className="btn">Settings</button>
      </nav>
    </header>
  );
};

export default Header;
