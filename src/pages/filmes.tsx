import { Header } from "../components/header/header";
import { HomeLauncher } from "../components/homeLauncher/homeLauncher";

import { FooterComponent } from "../components/footer/footer";
import { MoviePageComponent } from "../components/Tmdb/MoviePage";

export const Filmes = () => {
  return (
    <>
      <Header />
      <HomeLauncher />
      <MoviePageComponent />
      <FooterComponent />
    </>
  );
};
