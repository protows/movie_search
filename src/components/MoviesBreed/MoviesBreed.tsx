import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, CircularProgress, Box } from "@material-ui/core";
import { purple } from '@material-ui/core/colors';
import { getCurrentPage } from "../../services/dog_items.service";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Link } from "react-router-dom";
// import useStyles from "../../pages/Movies/Movies.styles";

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from "./MoviesBreed.styles";


interface Props { }

interface Params {
  breed: string;
}

const MoviesBreed = (props: Props) => {
  const { breed } = useParams<Params>();
  // const [moviesItemData, setMoviesItemData] = useState<any>({ title: "" });

  const [moviesItemData, setMoviesItemData] = useState<any>(Array);

  //const [images, setImages] = useState<string[]>([]);


  useEffect(() => {
    getCurrentPage(breed)
      .then((res) => {
        const { message } = res.data;
        console.log("dogItemData 88888888888 " + res.data.title);
        setMoviesItemData(res.data);

        // setMoviesItemData(res.data);

      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const classes = useStyles();


  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
                </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={moviesItemData.title}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          // image="/static/images/cards/paella.jpg"
          image={"https://" + moviesItemData.poster}
          // image="https://images.kinopoisk.cloud/posters/1003587.jpg"

          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {moviesItemData.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};


export default MoviesBreed;
