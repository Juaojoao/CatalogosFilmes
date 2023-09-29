import { useEffect, useState } from "react";
import { TMDBAuth } from "../../services/API";
import { Button } from "../buttons/button";
import { CardsMovies } from "../cards/cardsDrag";

export const Series = () => {
  const [series, setSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState("top_rated");
  const [fadeEnter, setFadeEnter] = useState(false);
  const serieList = [
    { text: "Mais Bem Avaliada", url: "top_rated" },
    { text: "Populares", url: "popular" },
    { text: "Na TV", url: "on_the_air" },
    { text: "Em Exibição Hoje", url: "airing_today" },
  ];

  useEffect(() => {
    const getMoviesList = async () => {
      const response = await TMDBAuth.get(`tv/${selectedSeries}`);
      setSeries(response.data.results);
    };

    setFadeEnter(true);
    getMoviesList();

    setTimeout(() => {
      setFadeEnter(false);
    }, 1100);
  }, [selectedSeries]);

  return (
    <div className="container">
      <h1 className="title-h1ssssss">SERIES</h1>
      <div className="button-movies">
        {serieList.map((serie) => (
          <Button
            key={serie.url}
            onClick={() => setSelectedSeries(serie.url)}
            title={serie.text}
            classname={selectedSeries === serie.url ? "btn-focus" : ""}
          />
        ))}
      </div>
      <CardsMovies movies={series} className={fadeEnter ? "fade-enter" : ""} />
    </div>
  );
};
