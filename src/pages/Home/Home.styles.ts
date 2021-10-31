import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "block",
    textDecoration: "none",
    color: theme.palette.text.primary,
    textTransform: "uppercase",
    marginTop: theme.spacing(2),

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  mainText: {
    marginTop: theme.spacing(2),
    maxHeight: "60vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: "25px",
    margin: "20px"

  },
  favourite: {
    marginTop: theme.spacing(2),
    maxHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    fontSize: "25px",
    color: "blue",
  },
  favouriteItems: {

    //width: "300px",
    // color: "black",
    // margin: "20px",
    // maxHeight: "60vh",
    // display: "flex",
    // flexDirection: "column",
    // flexWrap: "wrap",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"



  },


  // li: {
  //   // webkitColumnCount: 3,
  //   // mozColumnCount: 3,
  //   columnCount: 3,
  // }


}));

export default useStyles;
