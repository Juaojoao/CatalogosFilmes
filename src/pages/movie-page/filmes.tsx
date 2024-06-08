import { MoviePageComponent } from "./components/movie-container";
import { BodyComponent } from "../../components/body/body-component";

export const Filmes = () => {
  return (
    <>
      <BodyComponent content={<MoviePageComponent />} />
    </>
  );
};
