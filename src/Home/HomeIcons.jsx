import React from "react";
import "./HomeIcons.scss";

const HomeIcons = ({ image }) => {
  return (
    <>
      <div className="home-icon">
        <img src={image.path} alt={image.info} />
      </div>
    </>
  );
};

export default HomeIcons;
