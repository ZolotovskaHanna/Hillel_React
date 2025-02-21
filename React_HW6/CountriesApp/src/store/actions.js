export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const DELETE_COUNTRY = "DELETE_COUNTRY";

import countriesService from "../services/countriesService";

export const fetchCountries = async (dispatch) => {
  try {
    const data = await countriesService.getAll();
    dispatch({ type: FETCH_COUNTRIES, payload: data });
    localStorage.setItem("countries", JSON.stringify(data)); 
  } catch (error) {
    console.error("Ошибка загрузки стран:", error);
  }
};

export const deleteCountry = async (name, dispatch, state) => {
  try {
    if (!state.countries || !Array.isArray(state.countries)) return;

    const countryToDelete = state.countries.find((c) => c.name.official === name);
    if (!countryToDelete) return;

    await countriesService.delete(countryToDelete.id);
    const updatedCountries = state.countries.filter((c) => c.name.official !== name);

    dispatch({ type: DELETE_COUNTRY, payload: updatedCountries });
    localStorage.setItem("countries", JSON.stringify(updatedCountries));
  } catch (error) {
    console.error("Ошибка удаления страны:", error);
  }
};


