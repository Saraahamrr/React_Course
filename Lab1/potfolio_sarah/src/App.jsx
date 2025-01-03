import React from "react";
import Navbar from "./assets/Components/NavBar/Navbar";
import Hero from "./assets/Components/Hero/Hero";
import AboutMe from "./assets/Components/AboutMe/AboutMe";
import Portfolio from "./assets/Components/Portfolio/Portfolio";
import Footer from "./assets/Components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
