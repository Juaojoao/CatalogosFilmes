import "./style.css";
import { useDragHook } from "../../hooks/useDragHook";

export interface Movie {
  key: string;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
}

export interface CardsMoviesProps {
  movies: Movie[];
  className?: string;
}

export const CardsMovies = ({ movies, className }: CardsMoviesProps) => {
  const { startDrag, endDrag, drag } = useDragHook();

  const extratYear = (data: string) => {
    const date = new Date(data);
    return date.getFullYear();
  };
  return (
    <div
      className={`cards ${className}`}
      onMouseDown={startDrag}
      onMouseUp={endDrag}
      onMouseMove={drag}
    >
      <ul>
        {movies.map((movie) => (
          <li key={movie.key}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={185}
              height={270}
              decoding="async"
            />
            <div className="infos">
              <span>{movie.title}</span>
              <div className="infos-bases">
                <div className="year">
                  <span>{extratYear(movie.release_date)}</span>
                </div>
                <div className="rating">
                  <img src="/src/assets/icons/goldenStar.png" alt="" />
                  <span>{movie.vote_average}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
