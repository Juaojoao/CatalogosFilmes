import { useParams } from "react-router-dom";
import { BodyComponent } from "../../components/body/body-component";
import { DetailsComponent } from "./components/details-component";
import React from "react";

export const MovieOrSeriesDetails = () => {
  const { type } = useParams<{ type: string }>();

  let contentBody: React.ReactElement;

  if (type === "filmes") {
    contentBody = <DetailsComponent url="movie" />;
  } else if (type === "series") {
    contentBody = <DetailsComponent url="tv" />;
  } else {
    contentBody = <>Page Dont Fold</>;
  }

  return (
    <>
      <BodyComponent content={contentBody} />
    </>
  );
};
