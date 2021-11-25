import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [top, setTop] = useState("-120%");
  const [display, setDisplay] = useState("block");

  function show() {
    setDisplay("flex");
    setTop("0");
  }

  function close() {
    setTop("-120%");
  }

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/" className="links">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="navbar-links">
        <div className="individual_link hover-1">
          <Link to="/" className="links">
            Home
          </Link>
        </div>
        <div className="individual_link hover-1">
          <Link to="/products" className="links">
            Our Products
          </Link>
        </div>
        <div className="button-30">
          <Link to="/contact-us" className="links">
            Contact Us
          </Link>
        </div>
      </div>
      <nav>
        <div className="openMenu" onClick={show}>
          <HiMenuAlt1 />
        </div>
        <ul className="mainMenu" style={{ display: display, top: top }}>
          <li className="menu-links">
            <Link to="/" className="links" onClick={close}>
              Home
            </Link>
          </li>
          <li className="menu-links">
            <Link to="/products" className="links" onClick={close}>
              Our Products
            </Link>
          </li>
          <li className="menu-button button-30">
            <Link to="/contact-us" className="links" onClick={close}>
              Contact Us
            </Link>
          </li>
          <div className="closeMenu" onClick={close}>
            <AiOutlineCloseSquare />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
