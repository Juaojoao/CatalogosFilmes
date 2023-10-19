import "./style.css";
import ImgLogoMovie from "../../assets/wallpapers/logo-movie.png";

export const HomeLauncher = () => {
  return (
    <section className="home-launcher">
      <div className="infos">
        <img src={ImgLogoMovie} alt="" className="movieLogo" />
      </div>
    </section>
  );
};
