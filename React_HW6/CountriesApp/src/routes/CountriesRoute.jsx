import React from "react";
import CountriesList from "../components/CountriesList/CountriesList";

export default function CountriesRoute() {
  return (
    <div className="container">
      <h3 className="countrieslist">Countries List</h3>
      <CountriesList />
    </div>
  );
}