import axios from "axios";

export const getTvSeriesData = () => {
  return axios.get("https://api.kinopoisk.cloud/tv-series/all/page/1/token/9133ee7188cc9dc291218dd50b7020c4");
};
