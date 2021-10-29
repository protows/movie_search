import axios from "axios";

export const getTvSeriesElementData = () => {
  return axios.get("http://localhost:8090/seriesPage2");
};
