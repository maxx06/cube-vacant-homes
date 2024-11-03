import React, { useState } from 'react';
import logo from '../images/logo.png';

function Home({ onSearch }) {
  const [location, setLocation] = useState('');
  const [priceLow, setPriceLow] = useState('');
  const [priceHigh, setPriceHigh] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cityOptions = ["Raleigh", "Durham", "Chapel Hill"];

  const filteredOptions = cityOptions.filter(city =>
    city.toLowerCase().startsWith(location.toLowerCase()) && location
  );

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (city) => {
    setLocation(city);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    const criteria = { 
      location,
      priceLow: Number(priceLow),
      priceHigh: Number(priceHigh)
    };
    onSearch(criteria);
  };

  return (
    <div className="App-header">
      <img src={logo} alt="Cojomada Logo" className="logo" />
      <p>Find your next investment. Send an offer. All in one platform.</p>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter Location"
          className="input-64"
          value={location}
          onChange={handleLocationChange}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onFocus={() => setShowSuggestions(true)}
        />
        {showSuggestions && filteredOptions.length > 0 && (
          <ul className="suggestions-list">
            {filteredOptions.map((city, index) => (
              <li key={index} onClick={() => handleSuggestionClick(city)}>
                {city}
              </li>
            ))}
          </ul>
        )}
        <input
          type="number"
          placeholder="Price Low"
          className="input-64"
          value={priceLow}
          onChange={(e) => setPriceLow(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price High"
          className="input-64"
          value={priceHigh}
          onChange={(e) => setPriceHigh(e.target.value)}
        />
      </div>
      <button className="button-64" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Home;
