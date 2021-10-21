import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAllBreeds } from "../../services/movies.service";
import useStyles from "./Movies.styles";
import styles from "./Dogs.module.scss";
import { makeStyles } from '@material-ui/core/styles';
import DogBreed from "../../components/MoviesBreed/MoviesBreed";
import { Route, Switch } from "react-router";
import DogSearch from "../../components/DogSearch/DogSearch";
import qs from "qs";
import { useLocation } from "react-router";


import { selectMovies } from "../../store/movies/movies.selector";
import { fetchMovies } from "../../store/movies/movies.slice";
import { selectLoading } from "../../store/loading/loading.selector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from '@material-ui/core/Button';



interface Props { }

const Movies = (props: Props) => {
  const classes = useStyles();
  const [breeds, setBreeds] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const location = useLocation();

  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <div className={classes.breeds_table}>
        {loading[fetchMovies.type] === "PROGRESS" && <CircularProgress />}
        {loading[fetchMovies.type] === "SUCCESS" &&
          movies.map((moviesItem) => (
            < Link key={moviesItem} to={`/dogs/`} className={classes.link}>
              <Button className={classes.root}> {moviesItem.title}</Button>;

            </Link>
          ))}
      </div>
    </>

  );
};

export default Movies;
