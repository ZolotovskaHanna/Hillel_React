import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CountriesContext } from "../../context/CountriesContext";

export default function CountriesList() {
  const { countries, deleteCountry } = useContext(CountriesContext);

  if (!countries.length) return <p>No countries available</p>;

  return (
    <ul>
      {countries.map((country) => (
        <li className="countries" key={country.id}>
          <Link to={`/countries/${country.name.official}`}>
            {country.flag} {country.name.official}
          </Link>
          <button className="delete-button" onClick={() => deleteCountry(country.name.official)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
