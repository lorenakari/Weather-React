import React from "react";
import CityAndDate from "./CityAndDate";
import Search from "./Search";

export default function TopRow (props) {
    return(
        <div className = "TopRow">
            <CityAndDate city={props.city} />
            <Search />
        </div>
    );
}