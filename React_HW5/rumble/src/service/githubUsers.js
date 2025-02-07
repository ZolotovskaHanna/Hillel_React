import axios from "axios";

const API = "https://api.github.com/users";

const service = {
  getUser: (username) =>
    axios.get(`${API}/${username}`).then(({ data }) => data),
  getUserRepos: (username) =>
    axios.get(`${API}/${username}/repos?per_page=100`).then(({ data }) => data),
};

export default service;




