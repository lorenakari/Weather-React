import React from "react";
import TopRow from "./TopRow.js";
import Weather from "./Weather.js";
import "./Main.css";

export default function Main () {
  let weatherInfo = {
    city: "São Paulo",
    temperature: 25,
    wind: 80,
    humidity: 20,
    skyIconUrl: "https://openweathermap.org/img/wn/02n@2x.png",
    skyIconDescription: "Sun and clouds"
  };

  return (
    <div className="Main">
      <TopRow city={weatherInfo.city} />
      <Weather
        temp={weatherInfo.temperature}
        wind={weatherInfo.wind}
        humidity={weatherInfo.humidity}
        url={weatherInfo.skyIconUrl}
        description={weatherInfo.skyIconDescription}
      />
    </div>
  );
}