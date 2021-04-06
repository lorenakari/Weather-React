import React from "react";
import SearchCityForm from "./SearchCityForm";
import LocationButton from "./LocationButton";

export default function Search() {
    return(
    <div className="Search">
        <SearchCityForm />
        <LocationButton />
    </div>
    );
}