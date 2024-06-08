import { TMDBAuth } from "./TmdbAPI";

interface TMDBResponse {
  id?: string;
  url?: string;
  language_api?: string;
  search?: string;
}

export const TMDBService = {
  getBackground: async ({ url, id }: TMDBResponse) => {
    try {
      return (await TMDBAuth.get(`${url}/${id}/images`)).data;
    } catch (error) {
      console.error("Erro ao obter imagens:", error);
      throw error;
    }
  },

  // Detalhes de um filme ou série
  getDetails: async ({ url, id, language_api }: TMDBResponse) => {
    try {
      return (await TMDBAuth.get(`${url}/${id}${language_api}`)).data;
    } catch (error) {
      console.error("Erro ao obter detalhes:", error);
      throw error;
    }
  },

  // Detalhes dos participantes dentro de um filme ou série
  getParticipant: async ({ url, id }: TMDBResponse) => {
    try {
      return (await TMDBAuth.get(`${url}/${id}/credits`)).data.cast;
    } catch (error) {
      console.error("Erro ao obter créditos:", error);
      throw error;
    }
  },

  // Trailer de um filme ou série
  getTrailer: async ({ url, id }: TMDBResponse) => {
    try {
      return (await TMDBAuth.get(`${url}/${id}/videos`)).data.results[0]?.key;
    } catch (error) {
      console.error("Erro ao obter vídeos:", error);
      throw error;
    }
  },

  // Filmes ou séries similares
  getSimilar: async ({ url, id }: TMDBResponse) => {
    try {
      return (await TMDBAuth.get(`${url}/${id}/similar`)).data?.results;
    } catch (error) {
      console.error("Erro ao obter filmes similares:", error);
      throw error;
    }
  },

  // Buscar por palavra-chave
  getSearch: async ({ search }: TMDBResponse) => {
    try {
      return (
        await TMDBAuth.get(
          `search/multi?query=${search}&include_adult=false&language=pt-BR&page=1`
        )
      ).data;
    } catch (error) {
      console.error("Erro ao obter pesquisa:", error);
      throw error;
    }
  },
};
