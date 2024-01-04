import { BodyComponent } from "../../components/body/body-component";
import { SeriePageComponent } from "./components/serie-container";

export const Series = () => {
  return (
    <>
      <BodyComponent content={<SeriePageComponent />} />
    </>
  );
};
