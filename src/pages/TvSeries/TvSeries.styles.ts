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
  dogSearch: {
    display: "flex",
    paddingTop: "12px"
  },
  component_table: {
    maxHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  pagination: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
