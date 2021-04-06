import React from "react";

export default function SearchCityForm() {
    return (
    <form className="SearchCityForm">
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeHolder="Search city"
          autoComplete="off"
          autoFocus="on"
        />
      </div>
    </form>
  );
}