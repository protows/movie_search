import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./Movies.styles";
import { useLocation } from "react-router";
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import MoviesSearch from "../../components/MoviesSearch/MoviesSearch";
import qs from "qs";
import { getMoviePage } from "../../services/movies.service";

interface Props { }

const Movies = (props: Props) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const classes = useStyles();
  const location = useLocation();
  const [listMovies, setListMovies] = useState<any>(Array);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    getMoviePage(pageNumber)
      .then((res) => {
        setListMovies(res.data.movies);
      })
      .catch((err) => {
        console.log(err)
      });
  }, [pageNumber]);

  useEffect(() => {
    const searchParams = qs.parse(location.search.substr(1));
    if (searchParams.search) {
      setSearchText(searchParams.search as string);
    } else {
      setSearchText("");
    }
  }, [location.search]);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  return (
    <>
      <MoviesSearch />
      <div className={classes.component_table}>
        {listMovies
          .filter((moviesItem: any) => moviesItem.title_alternative.match(new RegExp(searchText, "gi")))
          .map((moviesItem: any) =>
            < Link key={moviesItem.id} to={`/movie/` + moviesItem.title_alternative} className={classes.link}>
              <Button className={classes.root}> {moviesItem.title_alternative}</Button>
            </Link>
          )}
      </div>
      <div className={classes.pagination}>
        <Typography>Page Next Level : {pageNumber}</Typography>
        <Pagination count={2} page={pageNumber} color="primary" onChange={handleChange} />
      </div>
    </>
  );
};

export default Movies;
