import "./style.css";
import { useEffect, useState } from "react";
import { TMDBAuth } from "../../../services/TMDB_API/TmdbAPI";
import { CardsComponent } from "../../../components/cards/cardsDrag";
import { Button } from "../../../components/buttons/button";
import { MovieList, language_api } from "../../../util/variaveis";

export const MoviesComponent = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("now_playing");
  const [fadeEnter, setFadeEnter] = useState(false);

  useEffect(() => {
    const getMoviesList = async () => {
      const response = await TMDBAuth.get(`movie/${selectedMovie}${language_api}`);
      setMovies(response.data.results);
    };

    setFadeEnter(true);
    getMoviesList();

    setTimeout(() => {
      setFadeEnter(false);
    }, 2000);
  }, [selectedMovie]);

  return (
    <div className="container">
      <h1 className="title-h1">FILMES</h1>
      <div className="button-movies">
        {MovieList.map((movie) => (
          <Button
            key={movie.url}
            onClick={() => setSelectedMovie(movie.url)}
            title={movie.text}
            classname={selectedMovie === movie.url ? "btn-focus" : ""}
          />
        ))}
      </div>
      <CardsComponent
        movies={movies}
        url="filmes"
        className={fadeEnter ? "fade-enter" : ""}
      />
    </div>
  );
};
