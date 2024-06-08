import axios from "axios";

export const TMDBAuth = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_REACT_API_KEY}`,
  },
});
