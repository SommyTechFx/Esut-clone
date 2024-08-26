import React, { useState } from "react";
import "../styles/nav.css";
import esutlogo from "../images/esutlogo.png";
import { IoIosMenu } from "react-icons/io";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <header className="nav-bar">
        <img src={esutlogo} alt="esut-logo-pics" />
        <h3>ESUT PORTAL</h3>
        <h5>Create Account</h5>
        <h5>Forgot Password</h5>
      </header>
      <IoIosMenu className="menu-icon" onClick={toggleMenu} />

      <div className={`navbar-drop ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>Create Account</li>
          <li>Forgot Password</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
