import React, { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCountry from "../../hooks/useCountry";
import { CountriesContext } from "../../context/CountriesContext";
import { renderObject } from "../../utils/renderObject";

export default function CountryCard() {
  const country = useCountry();
  const { deleteCountry } = useContext(CountriesContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  if (!country) {
    return <p>Country not found. <button onClick={() => navigate("/countries")}>Back to Countries</button></p>;
  }

  const translation = searchParams.get("translation");
  const translatedName = translation && country.translations[translation]?.official
    ? country.translations[translation].official
    : country.name?.official || "Unknown Country";

  const handleDelete = () => {
    deleteCountry(country.name.official);
    navigate("/countries"); 
  };

  return (
    <div>
      <h3>{translatedName}</h3>
      {renderObject(country)}
      <button onClick={handleDelete}>Delete country</button>
    </div>
  );
}
