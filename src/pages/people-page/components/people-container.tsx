import { useEffect, useState } from "react";
import {
  PeopleInfo,
  TMDBResponse,
} from "../../../util/interface/tmdb-interface";
import { PeopleCredits } from "./people-credits";
import { PeopleInfos } from "./people-infos";
import { useParams } from "react-router-dom";
import { TMDBAuth } from "../../../services/TMDB_API/TmdbAPI";
import { getUrl } from "../../../util/func/get-url";

export const PeopleComponent = () => {
  const { id } = useParams();
  const [isPeopleInfo, setIsPeopleInfo] = useState<PeopleInfo>();
  const [isPeopleCredits, setIsPeopleCredits] = useState<TMDBResponse[]>([]);
  const [isMidiaType, setIsMidiaType] = useState();

  useEffect(() => {
    const getPeopleInfo = async () => {
      try {
        const peopleInfo = (await TMDBAuth.get(`person/${id}`)).data;
        const peopleInfoTranslations = await TMDBAuth.get(
          `person/${id}/translations`
        );

        const translations = peopleInfoTranslations.data.translations;

        for (const translation of translations) {
          if (
            translation.iso_3166_1 === "BR" &&
            translation.iso_639_1 === "pt"
          ) {
            const { biography } = translation.data;

            setIsPeopleInfo({
              ...peopleInfo,
              biography: biography,
            });
            break;
          } else {
            setIsPeopleInfo(peopleInfo);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getPeopleCredits = async () => {
      try {
        const peopleCredits = (
          await TMDBAuth.get(`person/${id}/combined_credits`)
        ).data.cast;

        if (peopleCredits && peopleCredits.length > 0) {
          const index = 0;
          const midiaType = peopleCredits[index]?.media_type;

          setIsPeopleCredits(peopleCredits);
          setIsMidiaType(midiaType);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPeopleCredits();
    getPeopleInfo();
  }, [id]);

  return (
    <section className="people-container">
      {isPeopleInfo && <PeopleInfos peopleInfo={[isPeopleInfo]} />}
      {isPeopleCredits.length > 0 && (
        <PeopleCredits tmdbData={isPeopleCredits} url={getUrl(isMidiaType)} />
      )}
    </section>
  );
};
