import React, { useState, useEffect } from "react";
import { getTvSeriesData } from "../../services/tvSeries.service";


import { selectTvSeries } from "../../store/tvSeries/tvSeries.selector";
import { fetchCats } from "../../store/tvSeries/tvSeries.slice";
import { selectLoading } from "../../store/loading/loading.selector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { Box, CircularProgress } from "@material-ui/core";



import useStyles from "./TvSeries.styles";


import { useLocation } from "react-router";

import { Link } from "react-router-dom";
import catsSaga from "../../store/tvSeries/tvSeries.saga";

import Button from '@material-ui/core/Button';



interface Props { }

const TvSeries = (props: Props) => {
  const classes = useStyles();
  const [breeds, setBreeds] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const location = useLocation();

  const dispatch = useAppDispatch();
  const tvSeries = useAppSelector(selectTvSeries);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <>
      <div className={classes.breeds_table}>
        {loading[fetchCats.type] === "PROGRESS" && <CircularProgress />}
        {loading[fetchCats.type] === "SUCCESS" &&
          // cats.map((cat) => (

          //   < Link key={cat} to={`/cats/${cat}`} className={classes.link}>

          //     - {cat}
          //   </Link>

          // ))



          tvSeries.map(tvSeriesItem => (

            < Link key={tvSeriesItem.id} to={`/tvSeriesItem/}`} className={classes.link}>
              <Button className={classes.root}> {tvSeriesItem.title}</Button>;

            </Link>

          ))



          // cats.map(cats => (
          //   <p key={cats.name}>{cats.name}{cats.image.url}</p>
          // ))




          // cats.forEach((element) => (
          //   element


          //   //console.log(element.name + " " + index + " " + element.image.url);
          // ))




        }

      </div>
    </>

  );
};

export default TvSeries;
