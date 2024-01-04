import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDBAuth } from "../../../services/TMDB_API/TmdbAPI";
import { Movie } from "../../../util/interface/tmdb-interface";
import { DatailsTmdbComponent } from "../../../components/datails-tmdb/datails.tmdb";

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
        const response = await TMDBAuth.get(`${url}/${id}`);
        setDetails(response.data);
      }
    };

    getDetailsById();
  }, [id, url]);

  return <>{details && <DatailsTmdbComponent movies={[details]} />}</>;
};
