// import { useState } from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src={logo} width={"120px"} />
            </div>
            <nav>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Product</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Account</a>
                </li>
              </ul>
            </nav>
            <img src={cart} />
            <img src="images/menu.png" className="menu-icon" />
          </div>
          <div className="row">
            <div className="col-2">
              <h1>
                Give Your Workout <br />A New Style!
              </h1>
              <p>
                Success isn't about greatness. It's about consistency.
                Consistent
                <br />
                hard work gains success. Greatness will come.
              </p>
              <a href="" className="btn">
                Explore Now &#8594;
              </a>
            </div>
            <div className="col-2">
              <img src="images/image1.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
