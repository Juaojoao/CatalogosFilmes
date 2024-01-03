import { Movie } from "../interface/tmdb-interface";

export const extratTitle = (movie: Movie) => {
  if (!movie.title) return movie.name;
  return movie.title;
};
