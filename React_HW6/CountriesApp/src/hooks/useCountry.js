import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CountriesContext } from "../context/CountriesContext";

export default function useCountry() {
  const { countryName } = useParams();
  const { countries } = useContext(CountriesContext);
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundCountry = countries.find(c => c.name.official === countryName);
    setCountry(foundCountry);
    
    if (!foundCountry) {
      navigate("/countries");
    }
  }, [countryName, countries, navigate]);

  return country;
}


