import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onDataReceived }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async () => {
    if (searchInput.trim() === '') {
      alert('Please enter a valid country name!');
      return;
    }

    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${searchInput}`);
      onDataReceived(response.data);
    } catch (error) {
      console.log(error);
      alert('An error occurred while fetching data!');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter a country name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;