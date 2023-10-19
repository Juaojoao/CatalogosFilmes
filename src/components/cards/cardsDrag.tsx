import "./style.css";
import { useDragHook } from "../../hooks/useDragHook";
import ImgStar from "../../assets/icons/goldenStar.png";

export interface Movie {
  key: string;
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
}

export const CardsComponent = ({ movies, className }: CardsMoviesProps) => {
  const { startDrag, endDrag, drag } = useDragHook();

  const extratYear = (data: string) => {
    const date = new Date(data);
    return date.getFullYear();
  };

  const extratDataRelease = (movie: Movie) => {
    if (!movie.release_date) return movie.first_air_date;
    return movie.release_date;
  };

  const extratTitle = (movie: Movie) => {
    if (!movie.title) return movie.name;
    return movie.title;
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
              alt={extratTitle(movie)}
              decoding="async"
            />
            <div className="infos">
              <span>{extratTitle(movie)}</span>
              <div className="infos-bases">
                <div className="year">
                  <span>{extratYear(extratDataRelease(movie) || "")}</span>
                </div>
                <div className="rating">
                  <img src={ImgStar} alt="" />
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
