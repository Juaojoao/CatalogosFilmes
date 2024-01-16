export interface TMDBResponse {
  id?: string;
  url?: string;
  poster_path?: string;
  backdrop_path?: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average?: number;
  overview?: string;
  runtime?: number;
  number_of_episodes?: number;
  number_of_seasons?: number;
  media_type?: string;
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
  handleClicked?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface DatailsProps {
  movies: TMDBResponse[];
  credits: CreditsProps[];
  trailerId?: string;
  similarMovies?: TMDBResponse[];
  url?: string;
}

export interface PeopleProps {
  peopleInfo?: PeopleInfo[];
  tmdbData?: TMDBResponse[];
  url?: string;
}

export interface PeopleInfo {
  id?: number;
  name?: string;
  profile_path?: string;
  birthday?: string;
  biography?: string;
}
