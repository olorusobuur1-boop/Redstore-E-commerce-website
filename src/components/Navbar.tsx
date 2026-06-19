// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import menuPng from "../assets/images/menu.png";
import cartPng from "../assets/images/cart.png";
import logoPng from "../assets/images/logo.png";
import "./Hero.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menutoggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logoPng} width="125px" />
          </Link>
        </div>
        <nav>
          <ul style={{ maxHeight: isOpen ? "200px" : "0px" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/accounts">Account</Link>
            </li>
          </ul>
        </nav>
        <img src={cartPng} width="30px" height="30px" className="cart-png" />
        <img src={menuPng} className="menu-icon" onClick={menutoggle} />
      </div>
    </>
  );
};

export default Navbar;
