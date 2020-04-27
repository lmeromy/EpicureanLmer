import React from "react";
import Layout from "../Layout/Layout";
import { leahCountryInfo } from "./DestinationHelpers";
import { CountryFlagDisplay } from "./CountryFlagDisplay";
import { useFetch } from "../Hooks/useFetch";
import "./Destinations.scss";

export const Destinations = () => {
  const countryPath =
    "https://restcountries.eu/rest/v2/all?fields=name;capital;flag";
  let [data, loading] = useFetch(countryPath);
  const filteredCountries = leahCountryInfo(data);

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <Layout />
          <div className="main-destinations">
            <h1> Click on a Flag to see Lmer's recs</h1>
            {loading ? (
              "Loading..."
            ) : (
              <div className="countries-container">
                {filteredCountries.map((country) => (
                  <CountryFlagDisplay
                    key={country.name}
                    name={country.name}
                    flag={country.flag}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
