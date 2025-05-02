import { useState, useEffect } from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherDisplay from './WeatherDisplay';
import { fetchWeatherData } from '../data/data';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSetWeatherData = async (city) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetchWeatherData(city);
      if (!response || response.error) {
        throw new Error('City not found');
      }
      setWeatherData(response);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSetWeatherData('Mckinney,TX');
  }, []);

  return (
    <div className="weather-app">
      <WeatherSearch onSearch={handleSetWeatherData} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default WeatherApp;
