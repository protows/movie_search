import axios from "axios";

export const getPictures = (item: string) => {
  let itemI: string = item;
  //console.log("getPictures item " + itemI);
  // return axios.get("https://dog.ceo/api/breed/" + itemI + "/images");
  return axios.get("https://dog.ceo/api/breed/" + "some" + "/images");
};
