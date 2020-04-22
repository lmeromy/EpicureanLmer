import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { leahCountryInfo } from "./FetchCountries";
import { SingleCountry } from "./SingleCountry";
import "./Destinations.scss";

export const Destinations = () => {
  const [countries, setCountries] = useState([]);
  leahCountryInfo().then((data) => setCountries(data));

  return (
    <>
      <Layout />
      <div className="main-destinations">
        <h1> Here are all my destinations</h1>
        <div className="country-container">
          {countries.map((country) => (
            <SingleCountry
              key={country.name}
              name={country.name}
              flag={country.flag}
            />
          ))}
        </div>
      </div>
    </>
  );
};
