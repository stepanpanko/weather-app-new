// Install Axios using: npm install axios

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '7dc1be2730a07d7cce0372646ea25e73';

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold mb-4">Weather App</h1>
    <input
      type="text"
      placeholder="Enter city name"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="p-2 border rounded mr-2"
    />
    <button
      onClick={fetchWeatherData}
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      Get Weather
    </button>

    {weatherData && (
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">{weatherData.name}, {weatherData.sys.country}</h2>
        <p className="text-lg mb-2">Temperature: {weatherData.main.temp} K</p>
        <p className="text-lg mb-2">Weather: {weatherData.weather[0].description}</p>
        <p className="text-lg mb-2">Wind Speed: {weatherData.wind.speed}</p>
        <p className="text-lg mb-2">Timezone: {weatherData.timezone}</p>
      </div>
    )}
  </div>
  );
};

export default App;


