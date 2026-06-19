// import React from "react";
import "./About.css";

const About = () => {
  return (
    <>

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">Our Story</h2>
            <p className="about-text">
              At <strong>RedStore</strong>, we believe that success isn't about
              greatness—it's about consistency. Founded with a passion for
              fitness and a dedication to the athlete in everyone, we provide
              premium gear designed to elevate your daily grind.
            </p>
            <p className="about-text">
              Our purpose is to sustainably make the pleasure and benefits of
              sports accessible to the many. Whether you are hitting the gym,
              the field, or the track, our mission is to fuel your consistency,
              unlock your potential, and give your workout a bold new style.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>10k+</h3>
                <p>Happy Athletes</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Premium Products</p>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="card-background">
              <div className="circle-deco"></div>
              <div className="visual-content">
                <span className="tag">ATHLETE'S CHOICE</span>
                <h3>Consistent Hard Work Gains Success.</h3>
                <p>Greatness Will Come.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;







