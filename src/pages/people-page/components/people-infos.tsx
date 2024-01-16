import "./style.css";
import { PeopleProps } from "../../../util/interface/tmdb-interface";
import { image_api } from "../../../util/variaveis";

export const PeopleInfos = ({ peopleInfo }: PeopleProps) => {
  return (
    <section className="people-container">
      {peopleInfo?.map((info, index) => (
        <div key={index} className="people-info">
          {info.name && <span className="title">{info.name}</span>}
          <div className="people-info-image">
            {info.profile_path && (
              <img src={`${image_api}${info.profile_path}`} alt={info.name} />
            )}
          </div>
          <div className="people-info-details">
            {info.birthday && (
              <>
                <span className="subtitle">Nascimento: </span>
                <p className="text">{info.birthday}</p>
              </>
            )}
            {info.biography && (
              <>
                <span className="subtitle">Biografia:</span>
                <p className="text">{info.biography}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
