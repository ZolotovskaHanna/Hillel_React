import axios from "axios";

const API = `https://6794c8e3aad755a134ea6a08.mockapi.io/todos`;

const tasksService = {
  get: (id) => axios.get(API + (id ? `/${id}` : ``)).then(({ data }) => data),
  delete: (id) => axios.delete(`${API}/${id}`).then(({ data }) => data),
  put: (id, updatedTask) => axios.put(`${API}/${id}`, updatedTask).then(({ data }) => data), 
  post: (task) => axios.post(API, task).then(({ data }) => data),
};

export default tasksService;
