import axios from "axios";

export const getAllBreeds = () => {
  return axios.get("http://localhost:8090/moviePage1");
};
