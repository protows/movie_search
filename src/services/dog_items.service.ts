import axios from "axios";

import { useHistory, useLocation } from "react-router";
import React, { useState, useEffect } from "react";
import qs from "qs";


export const getCurrentPage = (item: string) => {
  let itemI: string = item;

  console.log("qqqqqqqqqqq itemI", itemI);
  return axios.get("http://localhost:8090/" + itemI);
  //return axios.get("http://localhost:8090/moviePage2");

};


// import axios from "axios";

// export const getPictures = (item: string) => {
//   let itemI: string = item;
//   console.log("getPictures item " + itemI);
//   // return axios.get("https://dog.ceo/api/breed/" + itemI + "/images");
//   return axios.get("https://dog.ceo/api/breed/affenpinscher/images");

// };
