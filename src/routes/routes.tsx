import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Filmes } from "../pages/filmes";
import { Series } from "../pages/series";
import { MovieOrSeriesDetails } from "../pages/type-details";

export const Router = () => {
  return (
    <Routes>
      <Route path="/fireflix/" element={<Home />} />
      <Route path="/fireflix/filmes" element={<Filmes />} />
      <Route path="/fireflix/series" element={<Series />} />
      <Route
        path="/fireflix/:typeContent/:id"
        element={<MovieOrSeriesDetails />}
      />
    </Routes>
  );
};
