import "./style.css";
import {
  footerDataApi,
  footerDataApp,
  footerDataListing,
  footerDataSocial,
} from "./data";

import IconLogo from "../../assets/icons/tmdb.svg";

export const FooterComponent = () => {
  return (
    <footer className="gc">
      <div className="footer-desc">
        <h2>FILMES ONLINE GRÁTIS - SERIES ONLINE - ANIMES ONLINE</h2>
      </div>
      <div className="footer-menu">
        <div className="column listing">
          <div className="title">Informações</div>
          {footerDataListing.map((item) => (
            <a
              key={item.id}
              rel="nofollow"
              title={item.title}
              href={item.href}
              className="hover"
            >
              {item.title}
            </a>
          ))}
        </div>

        {footerDataSocial.map((item) => (
          <div className="column social">
            <div className="title">Mídias Sociais</div>
            <a
              key={item.title}
              href={item.href}
              title={item.title}
              target="_BLANK"
              className="followTwitter"
            >
              <div className="gicon w20 white">{item.svg}</div>
              {item.contentSvg}
            </a>
            <div className="info">{item.content}</div>
          </div>
        ))}
        {footerDataApp.map((item) => (
          <div className="column app">
            <div className="title">Aplicativo TMDB</div>
            <a
              key={item.title}
              href={item.href}
              title={item.title}
              className="appButton"
              target="_BLANK"
            >
              <div className="gicon w20 white">{item.svg}</div>
              {item.contentSvg}
            </a>
            <div className="ask">{item.content}</div>
          </div>
        ))}
        {footerDataApi.map((item) => (
          <div className="column tmdb">
            <div className="title">Conteúdo &amp; API</div>
            <a
              key={item.title}
              href={item.href}
              title={item.title}
              className="box"
              target="_BLANK"
            >
              <img src={IconLogo} alt={item.title} width={199} height={29} />
            </a>
            <div className="info">{item.content}</div>
          </div>
        ))}
      </div>
      <div id="footerCopyright">
        © Copyright Todos os direitos reservados ao FireFLix 2023
      </div>
    </footer>
  );
};
