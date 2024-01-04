import { useEffect, useState } from "react";
import { CardsComponent } from "../../../components/cards/cardsDrag";
import { serieList } from "../../../util/variaveis";
import { TMDBAuth } from "../../../services/TMDB_API/TmdbAPI";

type Series = {
  [key: string]: any[];
};

export const SeriePageComponent = () => {
  const [series, setSeries] = useState<Series>({});
  const [fadeEnter, setFadeEnter] = useState(false);

  useEffect(() => {
    const fetchData = async (url: string) => {
      setFadeEnter(true);
      const response = await TMDBAuth.get(`tv/${url}`);
      setSeries((prevSeries) => ({
        ...prevSeries,
        [url]: response.data.results,
      }));
      setTimeout(() => {
        setFadeEnter(false);
      }, 2000);
    };

    serieList.forEach((siries) => {
      fetchData(siries.url);
    });
  }, []);

  return (
    <div className="container-cards">
      {serieList.map((sirie) => (
        <div key={sirie.url}>
          <h2>{sirie.text}</h2>
          <CardsComponent
            movies={series[sirie.url] || []}
            className={fadeEnter ? "fade-enter" : ""}
            url="series"
          />
        </div>
      ))}
    </div>
  );
};
