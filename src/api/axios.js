import axios from "axios";

// Single source of truth for the backend URL.
// Set REACT_APP_API_URL in a .env file to point at your deployed backend
// (e.g. REACT_APP_API_URL=https://your-backend.onrender.com).
// Falls back to localhost for local development.
export const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Attach the saved token (if any) to every request automatically.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
