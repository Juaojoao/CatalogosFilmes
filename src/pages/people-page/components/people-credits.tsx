import { PeopleProps } from "../../../util/interface/tmdb-interface";
import { CardComponent } from "../../../components/cards/card";

export const PeopleCredits = ({ tmdbData, url }: PeopleProps) => {
  return (
    <section className="people-container-card">
      {tmdbData && <CardComponent movies={tmdbData} url={url} />}
    </section>
  );
};
