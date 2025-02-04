// Fetch Weather Data from Weather API
async function getWeather() {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`
  );
  return res.json();
}

// Function to Display Weather Data
export default async function Weather() {
  const weather = await getWeather();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Weather App</h1>
      <p className="text-lg mt-2">
        Location: {weather.location.name}, {weather.location.country}
      </p>
      <p className="text-lg">Temperature: {weather.current.temp_c}°C</p>
      <p className="text-lg">Condition: {weather.current.condition.text}</p>
    </div>
  );
}
