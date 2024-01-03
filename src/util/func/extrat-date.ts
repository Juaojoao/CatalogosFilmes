import { Movie } from "../interface/tmdb-interface";

const extratYear = (data: string) => {
  const date = new Date(data);
  return date.getFullYear();
};

const extratDataRelease = (movie: Movie) => {
  if (!movie.release_date) return movie.first_air_date;
  return movie.release_date;
};

export const getReleaseYear = (movie: Movie) => {
  const date = extratDataRelease(movie) || "";
  return extratYear(date);
};
