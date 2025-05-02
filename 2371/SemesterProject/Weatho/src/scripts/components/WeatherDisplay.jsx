function WeatherDisplay({ data }) {
  if (!data || !data.currentConditions || !data.address) return null;

  const { address, currentConditions } = data;

  return (
    <div className="weather-display">
      <h2>Weather in {address}</h2>
      <p>Temperature: {currentConditions.temp}°F</p>
      <p>Condition: {currentConditions.conditions}</p>
      <img
        src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${currentConditions.icon}.png`}
        alt={currentConditions.conditions}
      />
    </div>
  );
}

export default WeatherDisplay;
