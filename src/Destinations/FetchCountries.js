export const myCountries = async () => {
  const countryPath =
    "https://restcountries.eu/rest/v2/all?fields=name;capital;flag";

  const response = await fetch(countryPath);
  const result = await response.json();
  return result;
};

const traveledCountries = [
  "United States of America",
  "Canada",
  "Mexico",
  "United Kingdom",
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
];

export const leahCountryInfo = () => {
  //   const countryInfo = myCountries();
  //   let myArray = [];
  //   countryInfo.then((data) => myArray.push(data[0]));
  //   const data = myArray.map((country) =>
  //     traveledCountries.includes(country.name)
  //   );
  //   return data;
  return myCountries();
};

// iterate through the myCountries array, if a name matches one on my list,
//then add the whole object to the returned array
//   const result = countryInfo.map((country) => country.name);
//   return result;
