import React, { useContext } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { deleteCountry } from "../../store/actions";
import CountriesContext from "../../context/CountriesContext";
import { renderObject } from "../../utils/renderObject";

export default function CountryCard() {
  const { state, dispatch } = useContext(CountriesContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { countryName } = useParams(); 

  const decodedCountryName = decodeURIComponent(countryName);
  const country = state.countries.find(c =>
    c.name.official.toLowerCase() === decodedCountryName.toLowerCase()
  );

  if (!country) {
    return (
      <div>
        <p>Country not found.</p>
        <button onClick={() => navigate("/countries")}>Back to Countries</button>
      </div>
    );
  }

  const translationKey = searchParams.get("translation");
  const translatedName = translationKey && country.translations[translationKey]?.official
  ? country.translations[translationKey].official
  : country.name?.official || "Unknown Country";

  const handleDelete = () => {
    deleteCountry(country.name.official, dispatch, state);
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