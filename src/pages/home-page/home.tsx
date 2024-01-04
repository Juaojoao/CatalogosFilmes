import { MoviesComponent } from "./components/home-container";
import { SeriesComponent } from "../serie-page/components/serie-card-container";
import { BodyComponent } from "../../components/body/body-component";

export const Home = () => {
  return (
    <>
      <BodyComponent
        content={
          <div className="container-cards">
            <MoviesComponent />
            <SeriesComponent />
          </div>
        }
      />
    </>
  );
};
