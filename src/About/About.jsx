import React from "react";
import Layout from "../Layout/Layout";
import AboutMeImage from "../images/undraw_exploring.png";

import "./About.scss";

export const About = () => {
  return (
    <>
      <Layout />
      <div className="main-about">
        <div className="about-text">
          <h3>Who am I? Why did I do this?</h3>
          <p>
            Hi! I’m Lmer. I am someone who enjoys exploring new and foreign
            places, especially via hiking and eating. I have the excellent
            privilege to have lived in and traveled to many very great places.
          </p>
          <p>
            Also….I am a nerd….I love collecting data! The dataset used on this
            website has been carefully put together by yours truly over the
            course of several years. It sort of started as a silly way to keep
            track of cafes with good coffee and wifi when I first moved to
            Glasgow, Scotland, but it has since evolved.
          </p>
          <p>
            Since my profession these days is software engineering, I decided to
            transform my original spreadsheet into something much nicer and more
            interesting to look at. I hope you enjoy!
          </p>
          <div className="leah-links">
            <a href="https://github.com/lmeromy">GITHUB --</a>
            <a href="https://www.linkedin.com/in/leah-meromy/"> LINKEDIN --</a>
            <a href="https://www.linkedin.com/in/leah-meromy/">PORTFOLIO</a>
          </div>
        </div>
        <div className="about-icon">
          <img src={AboutMeImage} alt="All about Lmer" />
        </div>
      </div>
    </>
  );
};
