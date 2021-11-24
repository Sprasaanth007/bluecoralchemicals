import React from "react";
import "./Hero.css";
import chemical from "../../assets/Chemical2.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left-side">
        <h1>
          Blue Coral <span>Chemicals</span>
        </h1>
        <p>
          Established in 2021, Blue Coral Chemicals is started out to innovate
          and to lead in the creation of systems and products that benefits
          society and custom these applications to maximize benefits in line
          with its company philosophy.
        </p>
      </div>
      <div className="chemical-image">
        <img src={chemical} alt="" />
      </div>
    </div>
  );
};

export default Hero;
