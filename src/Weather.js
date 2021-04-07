import React from "react";
import SkyIcon from "./SkyIcon";
import CelsiusFahrenheit from "./CelsiusFahrenheit";
import "./Weather.css";


export default function Weather(props) {
    return(
        <div className="Weather">
            <div className="main-weather-info">
                <SkyIcon url={props.url} />
                <div className="icon-description-and-temperature">
                    <small>{props.description}</small>
                    <h3 className="temperature-display">
                        <span className="Temperature">{props.temp}°C </span>
                        <i className="ThermometerIcon fas fa-thermometer-half"></i>
                        <CelsiusFahrenheit />
                    </h3>
                </div>
            </div>
            <div className="SeconderyWeatherInfo">
                <ul>
                    <li>Humidity: {props.humidity}%</li>
                    <li>Wind: {props.wind}km/h</li>
                </ul>
            </div>
        </div>
    );
}