import axios from "axios";

import { useHistory, useLocation } from "react-router";
import React, { useState, useEffect } from "react";
import qs from "qs";


export const getCurrentPage = (item: number) => {
  let itemI: number = item;




  //console.log("getPictures item " + itemI);
  // return axios.get("https://dog.ceo/api/breed/" + itemI + "/images");
  //return axios.get("https://dog.ceo/api/breed/" + "some" + "/images");
  // console.log(" axios is https://api.kinopoisk.cloud/movies/all/page/" + itemI + "/token/9133ee7188cc9dc291218dd50b7020c4");
  //return axios.get("https://api.kinopoisk.cloud/movies/all/page/" + itemI + "/token/9133ee7188cc9dc291218dd50b7020c4");

  //return axios.get("https://api.kinopoisk.cloud/movies/all/page/" + itemI + "/token/9133ee7188cc9dc291218dd50b7020c4");

  console.log("qqqqqqqqqqq itemI", itemI);
  // return axios.get("http://localhost:8090/+ " + "moviePage2");
  return axios.get("http://localhost:8090/moviePage2");



};
