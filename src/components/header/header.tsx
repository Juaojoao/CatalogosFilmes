import "./style.css";
import { headerData } from "./data.header";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [selected, setSelected] = useState("");

  return (
    <header>
      <div className="container">
        <nav>
          <Link className="logo" to="/fireflix">
            LOGO
          </Link>

          <ul>
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
