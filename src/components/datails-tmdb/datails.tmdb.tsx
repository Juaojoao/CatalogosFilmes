import "./style.css";
import { getReleaseYear } from "../../util/func/extrat-date";
import { extratTitle } from "../../util/func/extrat-title";
import { DatailsProps } from "../../util/interface/tmdb-interface";
import { image_api } from "../../util/variaveis";
import { Link } from "react-router-dom";
import { VideoComponent } from "../video-component/video-component";
import { TransitionsModal } from "../modal/modal-component";

export const DatailsTmdbComponent = ({
  movies,
  credits,
  trailerId,
}: DatailsProps) => {
  const timeToMinutes = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedHoures = String(hours);
    const formattedMinutes = String(remainingMinutes).padStart(2, "0");

    return `${formattedHoures}h, ${formattedMinutes}min`;
  };

  return (
    <div className="datails-container">
      {movies.map((movie, index) => (
        <div key={index}>
          <img
            className="img"
            src={`${image_api}${movie.poster_path}`}
            alt={extratTitle(movie)}
            decoding="async"
          />
          <div className="infos-container">
            <div className="infos">
              <div className="info-names">
                <span className="info-name">{`Assistir ${extratTitle(
                  movie
                )} Online`}</span>
                <span className="info-name2">{extratTitle(movie)}</span>
              </div>
              <div className="infos-bases">
                <div className="year">
                  <span>{getReleaseYear(movie)}</span>
                </div>
                <div className="rating">
                  <span>{`${movie.vote_average.toFixed(1)}/10`}</span>
                </div>
                {movie.runtime ? (
                  <div className="runtime">
                    <span>{timeToMinutes(movie.runtime)}</span>
                  </div>
                ) : (
                  <div className="runtime">
                    <span>{`${movie.number_of_seasons} Temporadas / ${movie.number_of_episodes} Episodios`}</span>
                  </div>
                )}
                {trailerId && (
                  <TransitionsModal
                    title="Assistir Trailer"
                    children={<VideoComponent videoId={trailerId} />}
                  />
                )}
              </div>
            </div>
            <div className="actress-container">
              {credits.slice(0, 4).map((actress, index) => (
                <Link
                  key={index}
                  to={`/fireflix/pessoa/${actress.id}-${actress.name
                    .replace(" ", "-")
                    .toLocaleLowerCase()}`}
                >
                  <img
                    src={`${image_api}${actress.profile_path}`}
                    alt=""
                    height={67}
                    width={45}
                  />
                  <span>{actress.name}</span>
                </Link>
              ))}
            </div>
            <div className="overviwer-container">{movie.overview}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
