import React from "react";
import "./Hero.css";
import profilePic from "../../profilePic.jpeg";

const Hero = () => {
  const handleLink = () => {
    const link = document.createElement("a");
    link.href = "https://www.linkedin.com/in/saraahamrr";
    link.target = "_blank";
    link.click();
  };

  return (
    <>
      <div id="Home" className="hero">
        <img className="profilePic" src={profilePic} alt="profilePic" />
        <h1>Hello I'm Sarah Amr</h1>
        <p>
          A Recent Python web developer graduate from the Information Technology
          Institute (ITI)
        </p>
        <button className="contactMe" onClick={handleLink}>
          LinkedIN
        </button>
      </div>
    </>
  );
};

export default Hero;
