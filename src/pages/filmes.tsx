import { useEffect, useState } from "react";
import { CardsMovies } from "../components/cards/cardsDrag";
import { Header } from "../components/header/header";
import { HomeLauncher } from "../components/homeLauncher/homeLauncher";
import { MovieList } from "../components/moviesAPI/movies";
import { TMDBAuth } from "../services/API";
import { FooterComponent } from "../components/footer/footer";

type Movies = {
  [key: string]: any[];
};

export const Filmes = () => {
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
    <>
      <Header />
      <HomeLauncher />
      <div className="container-cards">
        {MovieList.map((movie) => (
          <div key={movie.url}>
            <h2>{movie.text}</h2>
            <CardsMovies
              movies={movies[movie.url] || []}
              className={fadeEnter ? "fade-enter" : ""}
            />
          </div>
        ))}
      </div>
      <FooterComponent />
    </>
  );
};
