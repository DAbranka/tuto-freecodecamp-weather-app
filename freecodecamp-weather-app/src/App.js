import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Search from "./components/search/Search";
import React, { useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./components/api";

function App() {
  /*____________________________________________________A P P__H O O K S_________________________________________________________________ */

  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  /*_____________________________________________________________________________________________________________________ */

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metricig`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        console.log("Response", weatherResponse);

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(" currentWeatherApp ", currentWeather);
  console.log(forecast);
    

  return (
    <div className="container">
      {/* Search = La bare de recherche */}
      <Search onSearchChange={handleOnSearchChange} />
      {/* onSearchChange = le moment ou la valeur de la rech' change > {handleOnSearchChange = prend en charge le moment} */}
      <CurrentWeather data={currentWeather} />
    </div>
  );
}

export default App;
