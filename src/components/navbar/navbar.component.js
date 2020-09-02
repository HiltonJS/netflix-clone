import React, { useEffect, useState } from "react";
import Logo from "../../images/logo.png";
import "./nav.css";
const NavBar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav__logo" src={Logo} alt="Logo" />
    </div>
  );
};

export default NavBar;
