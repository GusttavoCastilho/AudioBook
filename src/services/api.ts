import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com",
});

export default api;
