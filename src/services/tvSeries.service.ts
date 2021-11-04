import axios from "axios";

export const getTvSeriesPage = (page: number) => {
  return axios.get("http://localhost:8090/tvSeriesPage" + page);
};

export const getTvSeriesTitle = (tvSeriesTitle: string) => {
  return axios.get("http://localhost:8090/tvSeries/" + tvSeriesTitle);
};
