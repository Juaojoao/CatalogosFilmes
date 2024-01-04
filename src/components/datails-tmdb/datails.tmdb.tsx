import ImgStar from "../../assets/icons/goldenStar.png";
import { getReleaseYear } from "../../util/func/extrat-date";
import { extratTitle } from "../../util/func/extrat-title";
import { CardsMoviesProps } from "../../util/interface/tmdb-interface";
import { image_api } from "../../util/variaveis";

export const DatailsTmdbComponent = ({ movies }: CardsMoviesProps) => {
  return (
    <div className="datails-container">
      {movies.map((movie, index) => (
        <div key={index}>
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
        </div>
      ))}
    </div>
  );
};
