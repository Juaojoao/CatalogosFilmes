import { headerData } from "./data.header";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            {headerData.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
