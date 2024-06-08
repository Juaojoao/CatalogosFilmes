import "./style.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TMDBService } from "../../../services/TMDB_API/request";
import { TMDBResponse } from "../../../util/interface/tmdb-interface";
import { CardComponent } from "../../../components/cards/card";

export const SearchContainer = () => {
  const location = useLocation();
  const search = location.search.replace(/[?,]/g, "");

  const [isDataTmdb, setIsDataTmdb] = useState<TMDBResponse[]>([]);
  const [isMidiaType, setIsMidiaType] = useState<"movie" | "tv">();

  useEffect(() => {
    try {
      const getSearch = async () => {
        const response = (await TMDBService.getSearch({ search })).results;
        setIsDataTmdb(response);

        if (response && response.length > 0) {
          const tvCredits = response.filter(
            (credit: any) => credit.media_type === "tv"
          );
          const movieCredits = response.filter(
            (credit: any) => credit.media_type === "movie"
          );

          if (tvCredits) {
            setIsMidiaType("tv");
          } else if (movieCredits) {
            setIsMidiaType("movie");
          }
        }
      };

      getSearch();
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  return (
    <section className="search-container-card">
      {isDataTmdb.length > 0 ? (
        isDataTmdb?.map((item, index) => (
          <CardComponent
            key={index}
            movies={[item]}
            url={isMidiaType === "tv" ? "series" : "filmes"}
          />
        ))
      ) : (
        <h1>{`Não foi possível encontrar por: ${search}`}</h1>
      )}
    </section>
  );
};
