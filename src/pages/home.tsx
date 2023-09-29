import { Header } from "../components/header/header";
import { HomeLauncher } from "../components/homeLauncher/homeLauncher";
import { Movies } from "../components/moviesAPI/movies";
import { Series } from "../components/seriesAPI/series";

export const Home = () => {
  return (
    <>
      <Header />
      <HomeLauncher />
      <div className="container-cards">
        <Movies />
        <Series />
      </div>
    </>
  );
};
