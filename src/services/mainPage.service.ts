import axios from "axios";

export const getRandomMainPage = () => {
  return axios.get("http://localhost:8090/mainPage");
};


