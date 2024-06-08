import { useEffect, useState } from "react";
import { CardsDragComponent } from "../../../components/cards/cardsDrag";
import { language_api, serieList } from "../../../util/variaveis";
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
      const response = await TMDBAuth.get(`tv/${url}${language_api}`);
      setSeries((prevSeries) => ({
        ...prevSeries,
        [url]: response.data.results,
      }));
      setTimeout(() => {
        setFadeEnter(false);
      }, 2000);
    };

    serieList.forEach((series) => {
      fetchData(series.url);
    });
  }, []);

  return (
    <div className="container-cards">
      {serieList.map((serie) => (
        <div key={serie.url}>
          <h2>{serie.text}</h2>
          <CardsDragComponent
            movies={series[serie.url] || []}
            className={fadeEnter ? "fade-enter" : ""}
            url="series"
          />
        </div>
      ))}
    </div>
  );
};
