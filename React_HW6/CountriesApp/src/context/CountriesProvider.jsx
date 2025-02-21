import React, { useReducer, useEffect } from "react";
import CountriesContext from "./CountriesContext";
import { reducer, initialState } from "../store/reducer";
import { fetchCountries } from "../store/actions";

export default function CountriesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.countries.length === 0) {
      fetchCountries(dispatch);
    }
  }, [dispatch]);

  return (
    <CountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
}

