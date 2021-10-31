import axios from "axios";

export const getCurrentPage = (item: string) => {
  let itemI: string = item;
  return axios.get("http://localhost:8090/" + itemI);
};
