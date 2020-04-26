import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../images/undraw_cabin_hkfr.png";
import "./Header.scss";

const Header = () => {
  const tempNotice = () => {
    alert(
      "Translation is a work-in-progress / La traduction est un travail en cours"
    );
  };
  return (
    <div className="header-container">
      <div className="home-icon-link">
        <Link to="/">
          <img src={HomeImage} alt="Link to Home" />
        </Link>
      </div>
      <div className="header-main">
        <div className="header-title">
          <Link to="/">Epicurean Lmer</Link>
        </div>
        <div className="header-sub">
          <Link to="/">Lmer's curated foodie/travel guide</Link>
        </div>
      </div>
      <div className="home-translate">
        <button onClick={tempNotice}>English/Francais</button>
      </div>
    </div>
  );
};

export default Header;
