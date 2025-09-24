import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // "https://planb-production.up.railway.app"
  // Si luego usas JWT:
  // headers: { Authorization: `Bearer ${token}` }
});

export const registerUser = (email, password) =>
  api.post("/api/register/", { email, password }); // OJO barra final
