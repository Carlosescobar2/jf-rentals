import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import JFLogo from "../../assets/JFLogo.jpeg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo-img">
        <img src={JFLogo} alt="/" height="90px" />
      </div>
      <div className="heading-list">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Rent</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
