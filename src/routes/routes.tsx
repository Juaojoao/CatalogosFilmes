import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home-page/home";
import { Filmes } from "../pages/movie-page/filmes";
import { Series } from "../pages/serie-page/series";
import { MovieOrSeriesDetails } from "../pages/details-page/type-details";
import { PeoplePage } from "../pages/people-page/people";

export const Router = () => {
  return (
    <Routes>
      <Route path="/fireflix/" element={<Home />} />
      <Route path="/fireflix/filmes" element={<Filmes />} />
      <Route path="/fireflix/series" element={<Series />} />
      <Route path="/fireflix/:type/:id" element={<MovieOrSeriesDetails />} />
      <Route path="/fireflix/pessoa/:id" element={<PeoplePage />} />
    </Routes>
  );
};
