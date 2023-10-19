import "../style.css";
import { useEffect, useState } from "react";
import { TMDBAuth } from "../../../services/TMDB_API/TmdbAPI";
import { CardsComponent } from "../../cards/cardsDrag";
import { Button } from "../../buttons/button";
import { MovieList } from "../../../services/TMDB_API/dataAPI";

export const MoviesComponent = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("now_playing");
  const [fadeEnter, setFadeEnter] = useState(false);

  useEffect(() => {
    const getMoviesList = async () => {
      const response = await TMDBAuth.get(`movie/${selectedMovie}`);
      setMovies(response.data.results);
    };

    setFadeEnter(true);
    getMoviesList();

    setTimeout(() => {
      setFadeEnter(false);
    }, 1100);
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
        className={fadeEnter ? "fade-enter" : ""}
      />
    </div>
  );
};
