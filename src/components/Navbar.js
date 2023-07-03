import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/LogoMOVEMEcolor-02.png";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = (_) => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img
          src={logo}
          className="logo"
          alt="logo"
          width="7%"
          padding="1rem"
          height="auto"
        />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/pricing">Precios</Link>
        </li>
        <li>
          <Link to="/training">Entrenamientos</Link>
        </li>
        <li>
          <Link to="/contact">Contactame</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
