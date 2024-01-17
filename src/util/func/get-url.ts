export const getUrl = (url: string | undefined) => {
  if (url === "movie") return "filmes";
  if (url === "tv") return "series";

  return url;
};
