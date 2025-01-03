import React from "react";
import "./AboutMe.css";
import profilePic from "../../profilePic.jpeg";

function AboutMe() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "/home/sarah/PythonFullStack/React/Day 1/Lab1/potfolio_sarah/public/Sarah Amr El-Sawy.pdf";
    link.download = "Sarah Amr El-Sawy.pdf";
    link.click();
  };
  return (
    <>
      <div id="About" className="aboutMeTitle">
        <h1>About me</h1>

        <div className="aboutSections">
          <div className="left">
            <img className="aboutPic" src={profilePic} alt="aboutPic" />
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              enim aliquid unde perferendis quae quisquam voluptas nulla odio
              laborum repellat nobis ducimus, qui, quod recusandae sunt,
              voluptatibus inventore consectetur ullam?
            </p>
          </div>
        </div>
        <button className="myResume" onClick={handleDownload}>
          My Resume
        </button>
      </div>
    </>
  );
}

export default AboutMe;
