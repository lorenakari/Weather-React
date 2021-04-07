import React from "react";
import "./CityAndDate.css";

export default function CityAndDate(props) {
  let date = {
    weekDay: "Sunday",
    date: "Mar. 14, 2021",
    time: "20:55"
  };

  return (
    <div className="CityAndDate">
      <h1>{props.city}</h1>
      <small>
        <span>{date.weekDay}</span> |<span> {date.date}</span> |
        <span> {date.time}</span>
      </small>
    </div>
  );
}