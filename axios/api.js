import axios from "axios";

const api = axios.create({
  baseURL: location.origin.includes("localhost")
    ? "http://localhost:3001"
    : location.origin,
});

export default api;
