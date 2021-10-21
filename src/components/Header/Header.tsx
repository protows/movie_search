import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import shadows from "@material-ui/core/styles/shadows";
import { NONAME } from "dns";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import styles from "./Header.module.scss";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@nature-ui/breadcrumb';


interface Props { }

// const useStyles = makeStyles({
//   root: {
//     padding: "8px",
//   },
// });

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
  const breadcrumbs = useBreadcrumbs();



  const classes = useStyles();
  const userNamesById = { '1': 'John' };

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
      </Card>

      <div className={styles.breadcrumbs_row}>
        <Breadcrumb separator="/">
          {breadcrumbs.map(({ breadcrumb, match }) => (
            <span key={match.url}>
              {/* <BreadcrumbItem> */}
              /
              <BreadcrumbLink href={match.url}>

                {breadcrumb}
              </BreadcrumbLink>

              {/* </BreadcrumbItem> */}


            </span>
          ))}
        </Breadcrumb>
      </div>

    </>


  );
};

export default Header;
