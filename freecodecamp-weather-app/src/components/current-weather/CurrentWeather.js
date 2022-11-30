/*__________________________________________________I M P O R T S___________________________________________________________________*/

import "./currentWeather.css";
import React from "react";
import PropTypes from "prop-types";

/*________________________________________________M A I N  F U N C T I O N_____________________________________________________________________*/

const CurrentWeather = ({ data }) => {
  console.log("currentWeatherComponent", data);

  if (Object.keys(data).length === 0) {
    return "";
  }

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
          {/* {data.weather[0].description} */}
          {/* errors : Cannot read properties of undefined (reading '0') */}
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src="src={`icons/${data.weather[0].icon}.png`} "
        />
        {/* src={`icon/${data.weather[0].icon}.png`} */}
        {/* errors : Cannot read properties of undefined (reading '0') */}
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like </span>
            <span className="parameter-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  data: PropTypes.array,
};

// ! reprendre la video à 55'35"

export default CurrentWeather;
