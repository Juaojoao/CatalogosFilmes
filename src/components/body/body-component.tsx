import { FooterComponent } from "../footer/footer";
import { Header } from "../header/header";

interface BodyProps {
  content: JSX.Element;
  status?: boolean;
}

export const BodyComponent = ({ content }: BodyProps) => {
  return (
    <>
      <Header />
      {content}
      <FooterComponent />
    </>
  );
};
