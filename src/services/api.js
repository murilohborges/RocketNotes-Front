import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-backend-api-yuim.onrender.com",
});