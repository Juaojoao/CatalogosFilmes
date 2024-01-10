import './syle.css'
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
          <div className="infos-container">
            <div className="infos">
              <div className='info-names'>
                <span className="info-name">{`Assistir ${extratTitle(movie)} Online`}</span>
                <span className='info-name2'>{extratTitle(movie)}</span>
              </div>
              <div className="infos-bases">
                <div className="rating">
                  <img src={ImgStar} alt="" />
                  <span>{movie.vote_average.toFixed(1) }</span>
                </div>
                <div className="year">
                  <span>{getReleaseYear(movie)}</span>
                </div>
              </div>
            </div>
            <div className="overviwer-container">
              {movie.overview}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
