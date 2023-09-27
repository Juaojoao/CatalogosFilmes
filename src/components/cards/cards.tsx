import React, { useEffect, useState } from "react";
import { TMDBAuth } from "../../services/API";
import "./style.css";

export const CardsMovies = () => {
  const [movies, setMovies] = useState<any[]>([]);

  const [isDraging, setIsDraging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const response = await TMDBAuth.get("/movie/popular");
      setMovies(response.data.results);
    };

    getMovies();
  }, []);

  const extratYear = (data: string) => {
    const date = new Date(data);
    return date.getFullYear();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
    e.currentTarget.style.cursor = "grabbing";
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraging) return;
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1; // Ajuste a sensibilidade aqui

    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraging(false);
    e.currentTarget.style.cursor = "auto";
  };

  return (
    <div
      className="cards"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <ul>
        {movies.map((movie) => (
          <li key={movie.key}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={185}
              height={270}
              decoding="async"
            />
            <div className="infos">
              <span>{movie.title}</span>
              <div className="infos-bases">
                <div className="year">
                  <span>{extratYear(movie.release_date)}</span>
                </div>
                <div className="rating">
                  <img src="/src/assets/icons/goldenStar.png" alt="" />
                  <span>{movie.vote_average}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
