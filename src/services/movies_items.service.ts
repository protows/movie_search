import axios from "axios";

export const getCurrentPage = (item: number) => {
  return axios.get("http://localhost:8090/moviePage2");
};
