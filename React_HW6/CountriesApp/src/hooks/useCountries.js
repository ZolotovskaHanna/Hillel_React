import { useState, useEffect } from "react";
import countriesService from "../services/countriesService";

export default function useCountries() {
  const [countries, setCountries] = useState(() => {
    const cachedData = localStorage.getItem("countries");
    return cachedData ? JSON.parse(cachedData) : [];
  });

  useEffect(() => {
    if (countries.length === 0) {
      countriesService.getAll()
        .then(data => {
          setCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
          console.log("Fetched countries:", data);
        })
        .catch(console.error);
    } else {
      console.log("Using cached countries:", countries);
    }
  }, []);

  const deleteCountry = async (name) => {
    try {
      const countryToDelete = countries.find(c => c.name.official === name);
      if (!countryToDelete) return;

      await countriesService.delete(countryToDelete.id);
      const updatedCountries = countries.filter(c => c.name.official !== name);
      setCountries(updatedCountries);
      localStorage.setItem("countries", JSON.stringify(updatedCountries));

      console.log(`Deleted country: ${name}`);
    } catch (error) {
      console.error("Failed to delete country:", error);
    }
  };

  return { countries, deleteCountry };
}