import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-main">
        <Link to="/">Epicurean Lmer</Link>
      </div>
      <div className="header-sub">
        <Link to="/">Lmer's curated foodie/travel guide</Link>
      </div>
    </div>
  );
};

export default Header;
