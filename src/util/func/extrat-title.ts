import { TMDBResponse } from "../interface/tmdb-interface";

export const extratTitle = (movie: TMDBResponse) => {
  if (!movie.title) return movie.name;
  return movie.title;
};
