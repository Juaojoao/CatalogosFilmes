import "./style.css";
import { headerData } from "./data.header";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputSearch } from "../input/seach";
import { useMediaQuery } from "@react-hook/media-query";
import logoSvg from "../../../public/logo.svg";

export const Header = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const [isNavMobile, setIsNavMobile] = useState(false);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleSearchSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (search === "") {
      return;
    }
    navigate(`/fireflix/search?${search}`);
  };

  const isNavMobileQuery = useMediaQuery("only screen and (max-width: 768px)");

  const handleMobileClick = () => {
    setIsNavMobile(!isNavMobile);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <Link className="logo" to="/fireflix">
            <img src={logoSvg} alt="Fireflix" />
          </Link>

          {isNavMobileQuery && (
            <div
              className={`mobile-menu ${isNavMobile ? "active" : ""}`}
              onClick={handleMobileClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          <ul className={`nav-links ${isNavMobile ? "active" : ""}`}>
            <InputSearch
              onSearchChange={handleSearch}
              onSubmit={handleSearchSubmit}
            />
            {headerData.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    className={selected === item.title ? "active" : ""}
                    onClick={() => setSelected(item.title)}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
