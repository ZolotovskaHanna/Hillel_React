import React, { useContext, useEffect } from "react";
import { fetchCountries, deleteCountry } from "../../store/actions";
import CountriesContext from "../../context/CountriesContext";
import { Link } from "react-router-dom";

export default function CountriesList() {
  const { state, dispatch } = useContext(CountriesContext);

  useEffect(() => {
    if (state.countries.length === 0) {
      fetchCountries(dispatch);
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("Countries List:", state.countries);
  }, [state.countries]);

  if (!state.countries.length) return <p>No countries available</p>;

  return (
  <>
    <ul>
      {state.countries.map((country) => (
        <li key={country.id} className="countries">
          <Link to={`/countries/${country.name.official}`}>
            {country.flag} {country.name.official}
          </Link>
          <button
            className="delete-button"
            onClick={() => deleteCountry(country.name.official, dispatch, state)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);
}