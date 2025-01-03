import React from "react";
import "./Navbar.css";
import logo from "../../logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="logo here" />
        <ul className="nav_menu">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About Me</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
