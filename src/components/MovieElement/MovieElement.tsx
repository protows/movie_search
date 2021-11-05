import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button } from "@material-ui/core";
import { useAppDispatch } from "../../store/hooks";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from "./MovieElement.styles";
import { favouriteAdd, favouriteRemove } from "../../store/favourite/favourite.slice";
import { getMovieTitle } from "../../services/movies.service";
import { selectFavourite } from "../../store/favourite/favourite.selector";
import { useAppSelector } from "../../store/hooks";
import { IFilms } from "../../shared/IFilms";

interface Props { }

interface Params {
  paramsElement: string;
}

const MovieElement = (props: Props) => {
  const dispatch = useAppDispatch();

  const { paramsElement } = useParams<Params>();
  const [moviesItemData, setMoviesItemData] = useState<IFilms>(Object);
  const [toggleFavourite, setToggleFavourite] = useState<string>("");
  const classes = useStyles();

  const itemFavourite = useAppSelector(selectFavourite);


  useEffect(() => {
    getMovieTitle(paramsElement)
      .then((res) => {
        setMoviesItemData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [paramsElement]);

  const addFavourite = (moviesTitle: string) => {
    dispatch(favouriteAdd([moviesTitle]));
    setToggleFavourite("готово!")
  }

  const removeFavourite = (moviesTitle: string) => {
    dispatch(favouriteRemove([moviesTitle]));
    setToggleFavourite("готово!")
  }

  return (
    <>
      <span key={moviesItemData.id}></span>
      < Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src={"http:" + moviesItemData.poster} alt="img" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={moviesItemData.title}
          subheader={moviesItemData.year}
        />
        <CardMedia
          className={classes.media}
          image={"http:" + moviesItemData.poster}
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


      {itemFavourite
        .map((moviesItem, i) => {
          return (
            <div key={i}>
              {moviesItem !== 'Жил-был пёс' &&
                < Button variant="contained" color="primary" onClick={() => removeFavourite(moviesItemData.title)}>
                  Удалить из избранного
               </Button>
              }
            </div>
          )
        }
        )
      }
      { toggleFavourite}

    </>
  );
};

export default MovieElement;
