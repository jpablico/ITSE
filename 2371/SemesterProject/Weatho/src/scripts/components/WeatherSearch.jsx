import { useState } from 'react';

function WeatherSearch({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (!city.trim()) {
      alert('Please enter a valid city name.');
      return;
    }
    onSearch(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="weather-search">
      <input
        className='search-input'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter city name"
      />
      <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default WeatherSearch;