import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDBAuth } from "../../../services/TMDB_API/TmdbAPI";
import {
  CreditsProps,
  TMDBResponse,
} from "../../../util/interface/tmdb-interface";
import { DatailsTmdbComponent } from "./datails.tmdb";
import { image_api, language_api } from "../../../util/variaveis";
import { getUrl } from "../../../util/func/get-url";
import { TMDBService } from "../../../services/TMDB_API/request";

interface DetailsComponentProps {
  url: string;
}

export const DetailsComponent = ({
  url,
}: DetailsComponentProps): JSX.Element => {
  const { id } = useParams();
  const [details, setDetails] = useState<TMDBResponse>();
  const [isCredit, setIsCredit] = useState<CreditsProps[]>([]);
  const [isSimilar, setIsSimilar] = useState<TMDBResponse[]>([]);
  const [isTrailer, setIsTrailer] = useState();

  const setWallpaper = (backgroundImage: string) => {
    const launcherBgElement = document.querySelector("#launcherBg");

    if (backgroundImage && launcherBgElement instanceof HTMLElement) {
      launcherBgElement.style.backgroundImage = `url(${image_api}${backgroundImage})`;
    }
  };

  const getWallpaper = async (url: string) => {
    try {
      const backgroundImageUrl = (await TMDBAuth.get(`${url}/${id}/images`))
        .data;
      const backdropPath = backgroundImageUrl.backdrops[0]?.file_path;
      const posterPath = backgroundImageUrl.posters[0]?.file_path;

      setWallpaper(backdropPath || posterPath);
    } catch (error) {
      console.error("Erro ao obter imagens:", error);
    }
  };

  const fetchData = async () => {
    try {
      const TMDBData = await TMDBService.getDetails({
        url,
        id,
        language_api,
      });

      if (TMDBData) {
        setDetails(TMDBData);
      }

      const participationsData = await TMDBService.getParticipant({ url, id });

      if (participationsData) {
        setIsCredit(participationsData);
      }

      const TrailerData = await TMDBService.getTrailer({ url, id });

      if (TrailerData) {
        setIsTrailer(TrailerData);
      }

      const SimilarData = await TMDBService.getSimilar({ url, id });

      if (SimilarData) {
        setIsSimilar(SimilarData);
      }
    } catch (error) {
      console.error("Erro ao obter os detalhes do filme:", error);
    }
  };

  useEffect(() => {
    const getDetailsById = async () => {
      if (url) {
        await getWallpaper(url);
        await fetchData();
      }
    };

    getDetailsById();
  }, [id, url]);

  return (
    <>
      {details && (
        <DatailsTmdbComponent
          movies={[details]}
          credits={isCredit}
          trailerId={isTrailer}
          similarMovies={isSimilar}
          url={getUrl(url)}
        />
      )}
    </>
  );
};
