import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getTvSeriesTitle } from "../../services/tvSeries.service";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from "../MovieElement/MovieElement.styles";
import { useAppDispatch } from "../../store/hooks";
import { Button } from "@material-ui/core";
import { IFilms } from "../../shared/IFilms";
import { selectFavourite } from "../../store/favourite/favourite.selector";
import { useAppSelector } from "../../store/hooks";
import { favouriteAdd, favouriteRemove } from "../../store/favourite/favourite.slice";



interface Props { }

interface Params {
    paramsTvSeries: string;
}

const TvSeriesElement = (props: Props) => {
    const dispatch = useAppDispatch();
    const [toggleFavourite, setToggleFavourite] = useState<string>("");
    const { paramsTvSeries } = useParams<Params>();
    const [moviesItemData, setMoviesItemData] = useState<IFilms>(Object);
    const classes = useStyles();
    const itemFavourite = useAppSelector(selectFavourite);


    useEffect(() => {
        getTvSeriesTitle(paramsTvSeries)
            .then((res) => {
                setMoviesItemData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const addFavourite = (tvSeriesTitle: string) => {
        dispatch(favouriteAdd([tvSeriesTitle]));
        setToggleFavourite("готово!")
    }

    const removeFavourite = (moviesTitle: string) => {
        dispatch(favouriteRemove([moviesTitle]));
        setToggleFavourite("готово!")
    }

    return (
        <>
            <span key={moviesItemData.id}></span>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img src={"http:" + moviesItemData.poster} alt="Some image in TvSeriesElement" />
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
                .map((moviesItem) =>
                    moviesItem !== 'Жил-был пёс' &&
                    < Button variant="contained" color="primary" onClick={() => removeFavourite(moviesItemData.title)}>
                        Удалить из избранного
      </Button>
                )
            }
            {toggleFavourite}
        </>
    );
};

export default TvSeriesElement;