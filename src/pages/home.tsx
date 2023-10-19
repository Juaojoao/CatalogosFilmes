import { FooterComponent } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { HomeLauncher } from "../components/homeLauncher/homeLauncher";
import { MoviesComponent } from "../components/Tmdb/cardDrag/movies";
import { SeriesComponent } from "../components/Tmdb/cardDrag/series";

export const Home = () => {
  return (
    <>
      <Header />
      <HomeLauncher />
      <div className="container-cards">
        <MoviesComponent />
        <SeriesComponent />
      </div>
      <FooterComponent />
    </>
  );
};
