import axios from "axios";

export const getTvSeriesData = () => {
  return axios.get("http://localhost:8090/seriesPage1");
};
