import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Filmes } from "../pages/filmes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filmes" element={<Filmes />} />
    </Routes>
  );
};
