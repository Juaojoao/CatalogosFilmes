import axios from "axios";

const MovieList = [
  {
    url: "popular",
    text: "Populares",
  },
  {
    url: "top_rated",
    text: "Melhores Avaliados",
  },
  {
    url: "upcoming",
    text: "Em Breve",
  },
  {
    url: "now_playing",
    text: "Em Cartaz",
  },
];

export const TMDBAuth = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_REACT_API_KEY}`,
  },
});
