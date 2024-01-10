export interface Movie {
  id?: string;
  url?: string;
  poster_path?: string;
  backdrop_path?: string
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  overview?: string;
}

export interface CardsMoviesProps {
  movies: Movie[];
  className?: string;
  url?: string;
}
