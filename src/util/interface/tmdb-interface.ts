export interface Movie {
  id?: string;
  url?: string;
  poster_path: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
}

export interface CardsMoviesProps {
  movies: Movie[];
  className?: string;
  url?: string;
}
