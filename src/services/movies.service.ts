import axios from "axios";

export const getMoviePage = (page: number) => {
  return axios.get("http://localhost:8090/moviePage" + page);
};

export const getMovieTitle = (movieTitle: string) => {
  return axios.get("http://localhost:8090/movie/" + movieTitle);
};
