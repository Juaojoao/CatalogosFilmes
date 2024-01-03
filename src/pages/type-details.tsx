import { useParams } from "react-router-dom";

const colorStyle: React.CSSProperties = { color: "red" };

export const MovieOrSeriesDetails = () => {
  const { typeContent } = useParams<{ typeContent: string; id: string }>();

  const renderParams = () => {
    if (typeContent === "filmes")
      return <h1 style={colorStyle}>Movie Details</h1>;
    if (typeContent === "series")
      return <h1 style={colorStyle}>Series Details</h1>;
  };

  return <div>{renderParams()}</div>;
};
