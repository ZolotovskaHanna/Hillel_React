import { FETCH_COUNTRIES, DELETE_COUNTRY } from "./actions";

export const initialState = {
  countries: JSON.parse(localStorage.getItem("countries")) || [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, countries: action.payload };
    case DELETE_COUNTRY:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

