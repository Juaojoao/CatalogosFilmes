import { useEffect, useState } from "react";
import { CardsComponent } from "../cards/cardsDrag";
import { MovieList } from "../../services/TMDB_API/dataAPI";
import { TMDBAuth } from "../../services/TMDB_API/TmdbAPI";

type Movies = {
  [key: string]: any[];
};

export const MoviePageComponent = () => {
  const [movies, setMovies] = useState<Movies>({});
  const [fadeEnter, setFadeEnter] = useState(false);

  useEffect(() => {
    const fetchData = async (url: string) => {
      setFadeEnter(true);
      const response = await TMDBAuth.get(`movie/${url}`);
      setMovies((prevMovies) => ({
        ...prevMovies,
        [url]: response.data.results,
      }));
      setTimeout(() => {
        setFadeEnter(false);
      }, 1100);
    };

    MovieList.forEach((movie) => {
      fetchData(movie.url);
    });
  }, []);
  return (
    <div className="container-cards">
      {MovieList.map((movie) => (
        <div key={movie.url}>
          <h2>{movie.text}</h2>
          <CardsComponent
            movies={movies[movie.url] || []}
            className={fadeEnter ? "fade-enter" : ""}
          />
        </div>
      ))}
    </div>
  );
};
