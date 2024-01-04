import { FooterComponent } from "../footer/footer";
import { Header } from "../header/header";
import { HomeLauncher } from "../homeLauncher/homeLauncher";

interface BodyProps {
  content: JSX.Element;
  status?: boolean;
}

export const BodyComponent = ({ content, status }: BodyProps) => {
  return (
    <>
      <Header />
      {status ? <HomeLauncher /> : <></>}
      {content}
      <FooterComponent />
    </>
  );
};
