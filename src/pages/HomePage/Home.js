import React from "react";
import AnimationRevealPage from "../../AnimationRevealPage";
import AboutUs from "../../components/AboutUs/AboutUs";
import Hero from "../../components/HeroSection/Hero";

const Home = () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <AboutUs />
    </AnimationRevealPage>
  );
};

export default Home;
