import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Filmes } from "../pages/filmes";
import { Series } from "../pages/series";

export const Router = () => {
  return (
    <Routes>
      <Route path="/CatalogosFilmes/" element={<Home />} />
      <Route path="/CatalogosFilmes/filmes" element={<Filmes />} />
      <Route path="/CatalogosFilmes/series" element={<Series />} />
    </Routes>
  );
};
