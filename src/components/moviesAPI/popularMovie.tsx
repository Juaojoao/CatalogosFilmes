import { useEffect, useState } from "react";
import { CardsMovies, Movie } from "../cards/cardsDrag";
import { TMDBAuth } from "../../services/API";

export const PopularMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await TMDBAuth.get("/movie/popular");
      setMovies(response.data.results);
    };

    getPopularMovies();
  }, []);

  return <CardsMovies movies={movies} />;
};
