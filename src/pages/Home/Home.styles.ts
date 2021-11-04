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
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  component_table: {
    marginTop: theme.spacing(2),
    maxHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default useStyles;
