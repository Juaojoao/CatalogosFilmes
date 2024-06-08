import { IconAndroid } from "../../assets/icons/android";
import { IconInstagram } from "../../assets/icons/instagram";

export const footerDataListing = [
  {
    id: 1,
    title: "Conta VIP",
    href: "vip",
  },
  {
    id: 2,
    title: "Suporte e FAQ",
    href: "faq",
  },
  {
    id: 3,
    title: "Política DMCA",
    href: "dmca",
  },
  {
    id: 4,
    title: "Termos e condições",
    href: "termos",
  },
];

export const footerDataSocial = [
  {
    href: "https://www.instagram.com/juaojoao_/",
    svg: <IconInstagram />,
    contentSvg: "Siga o FireFlix",
    title: "Instagram",
    content: "Sem Spam! Postamos apenas atualizações do site e aplicativo.",
  },
];

export const footerDataApp = [
  {
    href: "https://play.google.com/store/apps/details?id=com.anch.tmdb_anch_movies_database&hl=pt_BR&gl=US",
    title: "Aplicativo TMDB",
    contentSvg: "Baixe o aplicativo",
    content:
      "Já conhece o nosso aplicativo? Clique e descubra mais informações!",
    svg: <IconAndroid />,
  },
];

export const footerDataApi = [
  {
    href: "https://www.themoviedb.org",
    title: "Conteúdo & API",
    content:
      "Todo o conteúdo nesse site é promovido pela TMDB. A maior api de filmes, series e animes do mundo.",
  },
];
