import React from "react";
import "./Destinations.scss";
import { Link } from "react-router-dom";

export const CountryFlagDisplay = ({ name, flag }) => {
  return (
    <div className="single-country-flag">
      <Link to={`/destinations/${name}`}>
        <img src={flag} alt={name} />
        <h3>{name}</h3>
      </Link>
    </div>
  );
};
