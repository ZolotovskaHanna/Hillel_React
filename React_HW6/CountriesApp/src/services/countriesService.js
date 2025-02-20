import axios from "axios";

const API = "https://679286cdcf994cc6804a5368.mockapi.io/countries";

const countriesService = {
  getAll: () => axios.get(API).then(({ data }) => data),
  getById: async (id) => {
    const allCountries = await axios.get(API).then(({ data }) => data);
    return allCountries.find((c) => c.id === id) || null;
  },
  delete: (id) => axios.delete(`${API}/${id}`).then(({ data }) => data),
  put: (id, obj) => axios.put(`${API}/${id}`, obj).then(({ data }) => data),
  post: (obj) => axios.post(API, obj).then(({ data }) => data),
};

export default countriesService;
