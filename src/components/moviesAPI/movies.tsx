import "./style.css";
import { useEffect, useState } from "react";
import { TMDBAuth } from "../../services/API";
import { CardsMovies } from "../cards/cardsDrag";
import { Button } from "../buttons/button";

export const MovieList = [
  { text: "Lançamentos", url: "now_playing" },
  { text: "Populares", url: "popular" },
  { text: "Mais Assistidos", url: "top_rated" },
  { text: "Em Breve", url: "upcoming" },
];

export const Movies = () => {
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
      <CardsMovies movies={movies} className={fadeEnter ? "fade-enter" : ""} />
    </div>
  );
};
