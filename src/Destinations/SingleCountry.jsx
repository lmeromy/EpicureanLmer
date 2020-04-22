import React from "react";
import "./Destinations.scss";

export const SingleCountry = ({ name, flag }) => {
  return (
    <div className="single-country">
      <img src={flag} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
