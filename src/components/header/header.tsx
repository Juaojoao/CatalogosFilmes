import "./style.css";
import { headerData } from "./data.header";
import { useState } from "react";

export const Header = () => {
  const [selected, setSelected] = useState("Inicio");

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">LOGO</div>
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
