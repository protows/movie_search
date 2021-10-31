import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCurrentPage } from "../../services/get_items.service";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from "../MoviesBreed/MoviesBreed.styles";

interface Props { }

interface Params {
    breed: string;
}

const TvSeriesBreed = (props: Props) => {
    const { breed } = useParams<Params>();
    const [moviesItemData, setMoviesItemData] = useState<any>(Array);
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

export default TvSeriesBreed;