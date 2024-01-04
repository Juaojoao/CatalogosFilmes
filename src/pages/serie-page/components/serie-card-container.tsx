import { useEffect, useState } from "react";
import { TMDBAuth } from "../../../services/TMDB_API/TmdbAPI";
import { Button } from "../../../components/buttons/button";
import { CardsComponent } from "../../../components/cards/cardsDrag";
import { serieList } from "../../../util/variaveis";

export const SeriesComponent = () => {
  const [series, setSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState("top_rated");
  const [fadeEnter, setFadeEnter] = useState(false);

  useEffect(() => {
    const getMoviesList = async () => {
      const response = await TMDBAuth.get(`tv/${selectedSeries}`);
      setSeries(response.data.results);
    };

    setFadeEnter(true);
    getMoviesList();

    setTimeout(() => {
      setFadeEnter(false);
    }, 2000);
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
      <CardsComponent
        movies={series}
        url="series"
        className={fadeEnter ? "fade-enter" : ""}
      />
    </div>
  );
};
