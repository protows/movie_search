import React, { useState, useEffect, useContext } from "react";
import { selectTvSeries } from "../../store/tvSeries/tvSeries.selector";
import { fetchTvSeries } from "../../store/tvSeries/tvSeries.slice";
import { selectLoading } from "../../store/loading/loading.selector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CircularProgress, Typography } from "@material-ui/core";
import useStyles from "./TvSeries.styles";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import { fetchTvSeriesElement } from "../../store/tvSeriesElement/tvSeriesElement.slice";
import TodoContext from "../../contexts/pagePagination.context";
import { selectTvSeriesElement } from "../../store/tvSeriesElement/tvSeriesElement.selector";
import Pagination from '@material-ui/lab/Pagination';
import TvSeriesSearch from '../../components/TvSeriesSearch/TvSeriesSearch';
import qs from "qs";
import { useLocation } from "react-router";




interface Props { }

const TvSeries = (props: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const tvSeries = useAppSelector(selectTvSeries);
  const loading = useAppSelector(selectLoading);

  const { pageNumberTvSeries, editPageTvSeries } = useContext(TodoContext);
  const tvSeriesElement = useAppSelector(selectTvSeriesElement);

  const location = useLocation();


  useEffect(() => {
    dispatch(fetchTvSeries());
  }, []);

  useEffect(() => {
    dispatch(fetchTvSeriesElement());
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log("wwwwwwwwwwwwwwwwwww event is " + page);
    editPageTvSeries(page);
  };

  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const searchParams = qs.parse(location.search.substr(1));
    if (searchParams.search) {
      console.log("searchParams.search", searchParams.search);
      setSearchText(searchParams.search as string);
    } else {
      setSearchText("");
    }
  }, [location.search]);

  return (
    <>
      <TvSeriesSearch />
      <div className={classes.breeds_table}>
        {loading[fetchTvSeries.type] === "PROGRESS" && <CircularProgress />}
        {loading[fetchTvSeries.type] === "SUCCESS" &&
          pageNumberTvSeries.pageNumberTvSeries == 1 &&
          tvSeries
            .filter((tvSeriesItem) => tvSeriesItem.title_alternative.match(new RegExp(searchText, "gi")))
            .map(tvSeriesItem => (

              < Link key={tvSeriesItem.id} to={`/tvSeries/` + tvSeriesItem.title_alternative} className={classes.link}>
                <Button className={classes.root}> {tvSeriesItem.title_alternative}</Button>;

              </Link>

            ))}
          -
        {pageNumberTvSeries.pageNumberTvSeries == 2 &&
          tvSeriesElement
            .filter((tvSeriesItem) => tvSeriesItem.title_alternative.match(new RegExp(searchText, "gi")))
            .map(tvSeriesItem => (
              < Link key={tvSeriesItem.id} to={`/tvSeries/` + tvSeriesItem.title_alternative} className={classes.link}>
                <Button className={classes.root}> {tvSeriesItem.title_alternative}</Button>;
              </Link>
            ))
        }

      </div>
      <div className={classes.pagination}>
        <Typography>Page Next Level : {pageNumberTvSeries.pageNumberTvSeries}</Typography>

        <Pagination count={2} page={pageNumberTvSeries.pageNumberTvSeries} color="primary" onChange={handleChange} />
      </div>
    </>

  );
};

export default TvSeries;
