import React from "react";
import { getDay, dateFromTime } from "./DataFunction";

export default function Forecast(props) {
  const { data } = props;
  return (
    <div className="card--forecast">
      <div className="card--daydate">
        <p className="card--date">{getDay(data.date)}</p>
        <p className="card--time">{dateFromTime(data.date)}</p>
      </div>
      <p className="card--description">{data.description}</p>
      <div className="card--temp">
        <h4 className="card--temp-max">{data.temperature.max}</h4>
        <h5 className="card--temp-min">{data.temperature.min}</h5>
      </div>
      <p>icon</p>
    </div>
  );
}
