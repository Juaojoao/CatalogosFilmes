import "./style.css";
import { Link } from "react-router-dom";
import { CardsMoviesProps } from "../../util/interface/tmdb-interface";
import { image_api } from "../../util/variaveis";
import { extratTitle } from "../../util/func/extrat-title";
import { getReleaseYear } from "../../util/func/extrat-date";
import ImgStar from "../../assets/icons/goldenStar.png";

export const CardComponent = ({
  movies,
  url,
  handleClicked,
}: CardsMoviesProps) => {
  return (
    <ul>
      {movies &&
        movies.length > 0 &&
        movies?.map((movie, index) => (
          <Link
            key={index}
            to={`/fireflix/${url}/${movie.id}`}
            onClick={handleClicked}
          >
            <li>
              {movie.poster_path && (
                <img
                  src={`${image_api}${movie.poster_path}`}
                  alt={extratTitle(movie)}
                  decoding="async"
                />
              )}
              <div className="infos">
                {movie.title && <span>{extratTitle(movie)}</span>}
                <div className="infos-bases">
                  <div className="year">
                    {movie.release_date && <span>{getReleaseYear(movie)}</span>}
                  </div>
                  <div className="rating">
                    {movie.vote_average && <img src={ImgStar} alt="star" />}
                    {movie.vote_average && (
                      <span>{movie.vote_average.toFixed(1)}</span>
                    )}
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))}
    </ul>
  );
};
