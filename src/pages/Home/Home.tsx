import React, { useEffect, useState } from "react";
import { getRandomMainPage } from "../../services/mainPage.service";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from "../../components/MovieElement/MovieElement.styles";

interface Props { }

const Home = (props: Props) => {
  const classes = useStyles();
  const [listRandomFilms, setListRandomFilms] = useState<any>(Array);

  useEffect(() => {
    getRandomMainPage()
      .then((res) => {
        setListRandomFilms(res.data.resRandomArray);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return (
    <>
      <div className={classes.list_table}>
        {listRandomFilms.map((listRandomFilmsItem: any) =>
          <div key={listRandomFilmsItem.id} >
            < Card className={classes.root}>
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
                title={listRandomFilmsItem.title}
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={"http:" + listRandomFilmsItem.poster}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">

                  {listRandomFilmsItem.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  )
};

export default Home;
