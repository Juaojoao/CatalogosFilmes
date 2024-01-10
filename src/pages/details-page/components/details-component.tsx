import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDBAuth } from "../../../services/TMDB_API/TmdbAPI";
import { Movie } from "../../../util/interface/tmdb-interface";
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

  useEffect(() => {
    const getDetailsById = async () => {
      if (url) {
          try{
            const response = await TMDBAuth.get(`${url}/${id}${language_api}`);
            setDetails(response.data);

            const images = (await TMDBAuth.get(`${url}/${id}/images`)).data.backdrops[0];
            
            const backgroundImageUrl = images.file_path
            
            const launcherBgElement = document.querySelector('#launcherBg')
    
            if(launcherBgElement instanceof HTMLElement){
              launcherBgElement.style.backgroundImage = `url(${image_api}${backgroundImageUrl})`;
            }
          } catch(e) {
            console.error('Erro ao obter os detalhes do filme:', e);
          }
      }
    };

    getDetailsById();
  }, [id, url]);

  return <>{details && <DatailsTmdbComponent movies={[details]} />}</>;
};
