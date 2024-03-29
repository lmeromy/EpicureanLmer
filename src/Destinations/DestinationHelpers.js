const traveledCountries = [
  "United States of America",
  "Canada",
  "Mexico",
  "United Kingdom of Great Britain and Northern Ireland",
  "France",
  "Israel",
  "Turkey",
  "Greece",
  "Spain",
  "Italy",
  "Morroco",
  "Portugal",
  "Hungary",
  "Germany",
  "Netherlands",
  "Poland",
  "Argentina",
  "Finland",
  "Estonia",
  "Switzerland",
  "Iceland",
];

export const leahCountryInfo = (countryArray) => {
  const newArray = countryArray?.filter((country) => {
    return traveledCountries.includes(country.name);
  });

  return newArray;
};
