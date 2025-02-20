import React, { createContext } from "react";
import useCountries from "../hooks/useCountries";

export const CountriesContext = createContext();

export default function CountriesProvider({ children }) {
  const { countries, deleteCountry } = useCountries();

  return (
    <CountriesContext.Provider value={{ countries, deleteCountry }}>
      {children}
    </CountriesContext.Provider>
  );
}
