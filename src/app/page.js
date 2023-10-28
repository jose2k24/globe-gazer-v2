'use client'
import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm';
import CountryCard from '../../components/CountryCard';

export default function Home() {
  const [countryData, setCountryData] = useState(null);

  const handleDataReceived = (data) => {
    setCountryData(data);
  };
  

  return (
    <div>
      <h1>Country Info App</h1>
      <SearchForm onDataReceived={handleDataReceived} />
      {countryData && <CountryCard country={countryData[0]} />}
    </div>
  );
}