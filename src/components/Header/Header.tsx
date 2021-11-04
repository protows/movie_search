import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props { }

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    boxShadow: "none"
  },
  link: {
    textDecoration: "none",
    marginRight: theme.spacing(2),
  },
}));

const Header = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      < Card className={classes.root} >
        <NavLink className={classes.link} to="/">
          Home
      </NavLink>
        <NavLink exact className={classes.link} to="/movies">
          Movies
      </NavLink>
        <NavLink className={classes.link} to="/tvSeries">
          TvSeries
        </NavLink>
        {<NavLink className={classes.link} to="/favourite">
          Favourite
     </NavLink>}
      </Card>
    </>
  );
};

export default Header;
