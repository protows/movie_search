import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./TvSeries.styles";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import qs from "qs";
import { useLocation } from "react-router";
import { getTvSeriesPage } from "../../services/tvSeries.service";
import TvSeriesSearch from "../../components/TvSeriesSearch/TvSeriesSearch";

interface Props { }

const TvSeries = (props: Props) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const classes = useStyles();
  const location = useLocation();
  const [listTvSeries, setListTvSeries] = useState<any>(Array);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    getTvSeriesPage(pageNumber)
      .then((res) => {
        setListTvSeries(res.data['tv-series']);
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
      <TvSeriesSearch />
      <div className={classes.component_table}>
        {listTvSeries
          .filter((tvSeriesItem: any) => tvSeriesItem.title_alternative.match(new RegExp(searchText, "gi")))
          .map((tvSeriesItem: any) => (
            < Link key={tvSeriesItem.id} to={`/tvSeries/` + tvSeriesItem.title_alternative} className={classes.link}>
              <Button className={classes.root}> {tvSeriesItem.title_alternative}</Button>
            </Link>
          ))}
      </div>
      <div className={classes.pagination}>
        <Typography>Page Next Level : {pageNumber}</Typography>

        <Pagination count={2} page={pageNumber} color="primary" onChange={handleChange} />
      </div>
    </>
  );
};

export default TvSeries;
