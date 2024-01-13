export interface TMDBResponse {
  id?: string;
  url?: string;
  poster_path?: string;
  backdrop_path?: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  overview?: string;
  runtime: number;
  number_of_episodes: number;
  number_of_seasons: number;
}

export interface CreditsProps {
  id: number;
  name: string;
  profile_path: string;
}

export interface CardsMoviesProps {
  movies: TMDBResponse[];
  className?: string;
  url?: string;
}

export interface DatailsProps {
  movies: TMDBResponse[];
  credits: CreditsProps[];
  trailerId?: string;
}
