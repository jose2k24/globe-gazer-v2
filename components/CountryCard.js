import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.name.common} />
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Languages: {Object.values(country.languages).join(', ')}</p>
    </div>
  );
};

export default CountryCard;