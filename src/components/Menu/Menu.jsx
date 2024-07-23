import React from "react";
import "./styles.scss";

const Menu = ({ isOpen }) => {
  return (
    <div id="menu" className={`${isOpen ? "open" : ""}`}>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Tags</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <footer className="menu-footer">
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-twitter fa-fw"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope fa-fw"></i> Subscribe
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Menu;
