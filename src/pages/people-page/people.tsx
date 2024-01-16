import { BodyComponent } from "../../components/body/body-component";
import { PeopleComponent } from "./components/people-container";

export const PeoplePage = () => {
  return <BodyComponent content={<PeopleComponent />} />;
};
