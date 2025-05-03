import snowyDayIcon from '../../assets/weatherIcons/animated/snowy-1.svg';
import rainyIcon from '../../assets/weatherIcons/animated/rainy-1.svg';
import cloudyIcon from '../../assets/weatherIcons/animated/cloudy.svg';
import cloudyNightIcon from '../../assets/weatherIcons/animated/cloudy-night-1.svg';
import cloudyDayIcon from '../../assets/weatherIcons/animated/cloudy-day-1.svg';
import clearDayIcon from '../../assets/weatherIcons/animated/day.svg';
import clearNightIcon from '../../assets/weatherIcons/animated/night.svg';

function WeatherDisplay({ data }) {
  if (!data || !data.currentConditions || !data.address) return null;

  const { address, currentConditions } = data;
  const getIconSrc = (icon) => {
    switch (icon) {
      case 'rain':
        return rainyIcon;
      case 'clear-day':
        return clearDayIcon;
      case 'clear-night':
        return clearNightIcon;
      case 'cloudy':
        return cloudyIcon;
      case 'partly-cloudy-day':
        return cloudyDayIcon;
      case 'partly-cloudy-night':
        return cloudyNightIcon;
      case 'snow':
        return snowyDayIcon;
      default:
        return null;
    }
  };

  const iconSrc = getIconSrc(currentConditions.icon);

  return (
    <>
      <div className="weather-display">
      <div className="weather-information">
        <div className='weather-upper'>
          <h1 className="weather-location">{address}</h1>
          <h1 className="weather-temperature">{currentConditions.temp}°F </h1>
          <h2 className="weather-condition">{currentConditions.conditions}</h2>
        </div>
      </div>
      <div className="weather-icon-container">
            {iconSrc && <img src={iconSrc} alt={currentConditions.icon} className='weather-icon'/>}
      </div>
      </div>
      <div className="weather-details">
        <div className='weather-details-container'>
          <div className="weather-detail">
            <h3>Feels Like</h3>
            <p>{currentConditions.feelslike}°F</p>
          </div>
          <div className="weather-detail">
            <h3>Humidity</h3>
            <p>{currentConditions.humidity}%</p>
          </div>
          <div className="weather-detail">
            <h3>Wind Speed</h3>
            <p>{currentConditions.windspeed} mph</p>
          </div>
        </div>
        <div className='weather-details-container'>
          <div className="weather-detail">
            <h3>Visibility</h3>
            <p>{currentConditions.visibility} miles</p>
          </div>
          <div className="weather-detail">
            <h3>Pressure</h3>
            <p>{currentConditions.pressure} inHg</p>
          </div>
          <div className="weather-detail">
            <h3>UV Index</h3>
            <p>{currentConditions.uvindex} of 11</p>
          </div>
        </div>
      </div>
      <div className="weather-forecast">
        <h2 className='weather-forecast-title'>Forecast</h2>
        {data.days && data.days.slice(0, 5).map((day, index) => (
        <div key={index} className="forecast-day">
          <div className='forecast-day-left'>
            <div className="forecast-date">
              {new Date(day.datetime).toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <div className="forecast-icon">
              {getIconSrc(day.icon) && <img src={getIconSrc(day.icon)} alt={day.icon} className="small-icon" />}
            </div>
          </div>
          <div className="forecast-day-right">
            <div className="forecast-temp">
              <div className="forecast-high">
                <span className="high">High {day.tempmax}°</span>
              </div>
              <div className="forecast-low">
                <span className="low">Low {day.tempmin}°</span>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}

export default WeatherDisplay;
