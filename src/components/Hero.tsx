// import React from "react";
import "./Hero.css";
import image1 from "../assets/images/image1.png";

import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <Navbar />
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
              <Link to="/login" className="btn">
                Explore Now &#8594;
              </Link>
            </div>
            <div className="col-2">
              <img src={image1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
