import "./style.css";
import { headerData } from "./data.header";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputSearch } from "../input/seach";

export const Header = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");

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

  return (
    <header>
      <div className="container">
        <nav>
          <Link className="logo" to="/fireflix">
            LOGO
          </Link>

          <ul>
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
