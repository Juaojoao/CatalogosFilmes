import { useEffect } from "react";
import { image_api, language_api } from "../../util/variaveis";
import { TMDBAuth } from "../../services/TMDB_API/TmdbAPI";

export const GetBackground = () => {
  const getDocument = (url: string) => {
    const launcherBgElement = document.querySelector("#launcherBg");

    if (launcherBgElement instanceof HTMLElement) {
      launcherBgElement.style.backgroundImage = `url(${image_api}${url})`;
    }
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = (await TMDBAuth.get(`movie/now_playing${language_api}`))
        .data.results[0].backdrop_path;

      if (response) {
        getDocument(response);
      }
    };

    getMovies();
  }, []);

  return <div id="launcherBg"></div>;
};
