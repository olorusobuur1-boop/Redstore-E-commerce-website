// import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../components/Hero.css";
const ContactPage = () => {
  return (
    <div style={{ animation: "fadeIn 0.5s ease-in" }}>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
