import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button } from "@material-ui/core";
import { getCurrentPage } from "../../services/get_items.service";
import { useAppDispatch } from "../../store/hooks";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from "../../pages/Home/Home.styles";
import { increment } from "../../store/favourite/favourite.slice";
import { selectFavourite } from "../../store/favourite/favourite.selector";
import { useAppSelector } from "../../store/hooks";

interface Props { }

interface Params {
  breed: string;
}

const FavouriteBreed = (props: Props) => {
  const dispatch = useAppDispatch();

  const classes = useStyles();
  const itemFavourite = useAppSelector(selectFavourite);

  return (
    <>
      <div className={classes.favourite}>Список избранных:
        {itemFavourite.length === 0 && <p> Пусто</p>}
        <div className={classes.favouriteItems}>
          {itemFavourite
            .map((moviesItem) =>
              moviesItem + ", "
            )}
        </div>

      </div>

    </>
  );
};

export default FavouriteBreed;
