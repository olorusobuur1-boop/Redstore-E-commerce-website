// import react from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import "../components/Hero.css";
const AboutPage = () => {
  return (
    <div style={{ animation: "fadeIn 0.5s ease-in" }}>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
