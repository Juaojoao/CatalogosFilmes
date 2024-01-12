import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDBAuth } from "../../../services/TMDB_API/TmdbAPI";
import { CreditsProps, Movie } from "../../../util/interface/tmdb-interface";
import { DatailsTmdbComponent } from "../../../components/datails-tmdb/datails.tmdb";
import { image_api, language_api } from "../../../util/variaveis";

interface DetailsComponentProps {
  url: string;
}

export const DetailsComponent = ({
  url,
}: DetailsComponentProps): JSX.Element => {
  const { id } = useParams();
  const [details, setDetails] = useState<Movie>();
  const [isCredit, setIsCredit] = useState<CreditsProps[]>([])
  const [isTrailer, setIsTrailer] = useState();

  useEffect(() => {
    const getDetailsById = async () => {
      if (url) {
          try{
            const backgroundImageUrl = (await TMDBAuth.get(`${url}/${id}/images`)).data.backdrops[0].file_path;
            const launcherBgElement = document.querySelector('#launcherBg')
    
            if(launcherBgElement instanceof HTMLElement){
              launcherBgElement.style.backgroundImage = `url(${image_api}${backgroundImageUrl})`;
            }

            const TMDBData = (await TMDBAuth.get(`${url}/${id}${language_api}`)).data;
            const CreditsData = (await TMDBAuth.get(`${url}/${id}/credits`)).data.cast
            const TrailerData = await (await TMDBAuth.get(`${url}/${id}/videos`)).data.results[0].key

            setDetails(TMDBData);
            setIsCredit(CreditsData);
            setIsTrailer(TrailerData)
            
          } catch(e) {
            console.error('Erro ao obter os detalhes do filme:', e);
          }
      }      
    };

    getDetailsById();
  }, [id, url]);

  return <>{details && <DatailsTmdbComponent movies={[details]} credits={isCredit} trailerId={isTrailer} />}</>;
};
