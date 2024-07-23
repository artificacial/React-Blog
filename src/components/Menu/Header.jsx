import React from "react";
import "./styles.scss";

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header id="header">
      <nav className="nav">
        <button
          className={`toggle-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
