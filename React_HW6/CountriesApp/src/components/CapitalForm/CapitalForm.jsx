import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountriesContext } from "../../context/CountriesContext";

export default function CapitalForm() {
  const { countries } = useContext(CountriesContext);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCapital, setSelectedCapital] = useState("");
  const [selectedTranslation, setSelectedTranslation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (countries.length > 0) {
      const defaultCountry = countries.find(c => c.capital?.length > 0);
      if (defaultCountry) {
        setSelectedCountry(defaultCountry);
        setSelectedCapital(defaultCountry.capital[0]);

        const translationsKeys = Object.keys(defaultCountry.translations);
        if (translationsKeys.length > 0) {
          setSelectedTranslation(translationsKeys[0]); 
        }
      }
    }
  }, [countries]);

  const handleCapitalChange = (e) => {
    const capital = e.target.value;
    const country = countries.find(c => c.capital.includes(capital));
    if (country) {
      setSelectedCountry(country);
      const translationsKeys = Object.keys(country.translations);
      if (translationsKeys.length > 0) {
        setSelectedTranslation(translationsKeys[0]);
      }
    }
    setSelectedCapital(capital);
  };

  const handleTranslationChange = (e) => {
    setSelectedTranslation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCountry) {
      navigate(`/countries/${selectedCountry.name.official}?translation=${selectedTranslation}`);
    }
  };

  if (countries.length === 0) return <p>No available countries</p>;

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3 className="title-form">Capital Form Component</h3>
      <label>
        Select Capital:
        <select name="capital" value={selectedCapital} onChange={handleCapitalChange}>
          {countries.map(c =>
            c.capital?.length > 0 && (
              <option key={c.id} value={c.capital[0]}>
                {c.flag || "🏳️"} {c.capital[0]}
              </option>
            )
          )}
        </select>
      </label>
      <label>
        Select Translation:
        <select name="translation" value={selectedTranslation} onChange={handleTranslationChange}>
          {selectedCountry && Object.keys(selectedCountry.translations).length > 0 ? (
            Object.keys(selectedCountry.translations).map(lang => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))
          ) : (
            <option disabled>No available translations</option>
          )}
        </select>
      </label>
      <button type="submit">Read more about {selectedCountry?.name.official}</button>
    </form>
  );
}
