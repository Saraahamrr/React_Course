import React from "react";
import "./Portfolio.css";
import project from "../../projectex.jpeg";

function Portfolio() {
  const handleShowmore = () => {
    const link = document.createElement("a");
    link.href = "https://github.com/Saraahamrr?tab=repositories";
    link.target = "blank";
    link.click();
  };

  return (
    <>
      <div id="Portfolio" className="myWork">
        <div className="myWork_Title"></div>
        <h1>My Latest Work</h1>

        <div className="PortfolioContainer">
          <img src={project} className="Project1" alt="projectPic" />
          <img src={project} className="Project2" alt="projectPic" />
          <img src={project} className="Project3" alt="projectPic" />
          <img src={project} className="Project4" alt="projectPic" />
          <img src={project} className="Project5" alt="projectPic" />
          <img src={project} className="Project6" alt="projectPic" />
        </div>
        <div className="resume">
          <button className="showMore" onClick={handleShowmore}>
            Show More
          </button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
