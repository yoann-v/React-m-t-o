import React, { useState } from 'react';
import './App.css';
import WeatherService from "./services/WeatherService";
import { WeatherForm } from './components/WeatherForm';
import { WeatherResult } from './components/WeatherResult';
import { Weather } from "./models/Weather";

const style = {
  flex: {
    display: "flex",
    justifyContent: "center",
    margin: "5%"
  }
}

function App() {
  const [forecast, setForecast] = useState<Weather|null>();
  const [city, setCity] = useState('');

  const getWeatherByCity = (city: string) => {
    WeatherService.getWeatherByCity(city).then(json => { setForecast(json)});
  }

  const getWeatherByLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      WeatherService.getWeatherByLocation(position.coords.latitude.toString(), position.coords.longitude.toString()).then(json=> {console.log(json); setForecast(json);})
    })
    
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  }

  return (
    <>
      <h1>OpenWeather - TSSR M2i</h1>
      <div style={style.flex}>
        <WeatherForm city={city} searchCity={() => getWeatherByCity(city)} handleChange={handleChange} searchLocation={getWeatherByLocation} />
      </div>
      <div style={style.flex}>
        {forecast && <WeatherResult weather={forecast} />}
      </div>
    </>
  );
}

export default App;
