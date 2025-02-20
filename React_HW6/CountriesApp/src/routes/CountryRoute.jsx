import React from "react";
import CountryCard from "../components/CountryCard/CountryCard";
import NavigationBtn from "../components/NavigationBtn/NavigationBtn";

export default function CountryRoute() {
  return (
    <div className="container">
      <h3>Country Information</h3>
      <CountryCard />
      <NavigationBtn title="Back to Countries" route="/countries" />
    </div>
  );
}
