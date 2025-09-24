// src/services/auth.js
import { api } from "../lib/api";

// Llama a /api/register/ (OJO: slash final)
export function registerUser(email, password) {
  return api.post("/api/register/", { email, password });
}
