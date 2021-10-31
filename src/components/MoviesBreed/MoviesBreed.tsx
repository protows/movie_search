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
import useStyles from "./MoviesBreed.styles";
import { increment } from "../../store/favourite/favourite.slice";
interface Props { }

interface Params {
  breed: string;
}

const MoviesBreed = (props: Props) => {
  const dispatch = useAppDispatch();

  const { breed } = useParams<Params>();
  const [moviesItemData, setMoviesItemData] = useState<any>(Array);
  const [images, setImages] = useState<string>("");
  const classes = useStyles();

  useEffect(() => {
    getCurrentPage(breed)
      .then((res) => {
        setMoviesItemData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const addFavourite = (moviesTitle: string) => {
    dispatch(increment([moviesTitle]));
    setImages("готово!")
  }

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
      <Button variant="contained" color="primary" onClick={() => addFavourite(moviesItemData.title)}>
        Добавить в избранное
    </Button>
      {images}

    </>
  );
};

export default MoviesBreed;
