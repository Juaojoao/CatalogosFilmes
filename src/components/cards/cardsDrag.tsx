import "./style.css";
import ImgStar from "../../assets/icons/goldenStar.png";
import { useDragHook } from "../../hooks/useDragHook";
import { image_api } from "../../util/variaveis";
import { CardsMoviesProps } from "../../util/interface/tmdb-interface";
import { getReleaseYear } from "../../util/func/extrat-date";
import { extratTitle } from "../../util/func/extrat-title";
import { Link } from "react-router-dom";

export const CardsComponent = ({
  movies,
  className,
  url,
}: CardsMoviesProps) => {
  const { startDrag, drag, endDrag, handleLinkClick } = useDragHook();

  return (
    <div
      className={`cards ${className}`}
      onMouseDown={startDrag}
      onMouseUp={endDrag}
      onMouseMove={drag}
    >
      <ul>
        {movies.map((movie, index) => (
          <Link
            key={index}
            to={`/fireflix/${url}/${movie.id}`}
            onClick={handleLinkClick}
          >
            <li>
              <img
                src={`${image_api}${movie.poster_path}`}
                alt={extratTitle(movie)}
                decoding="async"
              />
              <div className="infos">
                <span>{extratTitle(movie)}</span>
                <div className="infos-bases">
                  <div className="year">
                    <span>{getReleaseYear(movie)}</span>
                  </div>
                  <div className="rating">
                    <img src={ImgStar} alt="" />
                    <span>{movie.vote_average.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
