import React, { useEffect, useState, useContext } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./Movies.styles";
import { useLocation } from "react-router";
import { selectMovies } from "../../store/movies/movies.selector";
import { fetchMovies } from "../../store/movies/movies.slice";
import { selectLoading } from "../../store/loading/loading.selector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';

import TodoContext from "../../contexts/pagePagination.context";

import { selectMoviesElement } from "../../store/moviesElement/moviesElement.selector";
import { fetchMoviesElement } from "../../store/moviesElement/moviesElement.slice";
import MoviesSearch from "../../components/MoviesSearch/MoviesSearch";
import qs from "qs";

//store/moviesElement/movieElements.selector

interface Props { }

const Movies = (props: Props) => {




  const { pageNumber, editPage } = useContext(TodoContext);


  const classes = useStyles();
  const location = useLocation();

  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const loading = useAppSelector(selectLoading);

  const moviesElement = useAppSelector(selectMoviesElement);

  useEffect(() => {
    dispatch(fetchMoviesElement());
  }, []);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    editPage(page);
  };


  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const searchParams = qs.parse(location.search.substr(1));
    if (searchParams.search) {
      setSearchText(searchParams.search as string);
    } else {
      setSearchText("");
    }
  }, [location.search]);

  return (
    <>
      <MoviesSearch />
      <div className={classes.breeds_table}>
        {loading[fetchMovies.type] === "PROGRESS" && <CircularProgress />}
        {loading[fetchMovies.type] === "SUCCESS" &&
          pageNumber.pageNumber === 1 &&
          moviesElement
            .filter((moviesItem) => moviesItem.title_alternative.match(new RegExp(searchText, "gi")))
            .map((moviesItem) =>
              < Link key={moviesItem} to={`/movies/` + moviesItem.title_alternative} className={classes.link}>
                <Button className={classes.root}> {moviesItem.title_alternative}</Button>;
               </Link>
            )}
          -
          {pageNumber.pageNumber === 2 &&
          movies
            .filter((moviesItem) => moviesItem.title_alternative.match(new RegExp(searchText, "gi")))
            .map((moviesItem) => (
              < Link key={moviesItem} to={`/movies/` + moviesItem.title_alternative} className={classes.link}>
                <Button className={classes.root}> {moviesItem.title_alternative}</Button>;
              </Link>
            ))

        }

      </div>
      <div className={classes.pagination}>
        <Typography>Page Next Level : {pageNumber.pageNumber}</Typography>

        <Pagination count={2} page={pageNumber.pageNumber} color="primary" onChange={handleChange} />
      </div>

    </>

  );
};

export default Movies;
