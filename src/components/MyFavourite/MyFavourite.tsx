import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./MyFavourite.styles";
import { useAppSelector } from "../../store/hooks";
import Button from '@material-ui/core/Button';
import { selectFavourite } from "../../store/favourite/favourite.selector";

interface Props { }
const MyFavourite = (props: Props) => {
  const itemFavourite = useAppSelector(selectFavourite);

  const classes = useStyles();
  return (
    <>
      yes
      <div className={classes.breeds_table}>
        {itemFavourite}

        {itemFavourite
          .map((moviesItem) =>
            < Link key={moviesItem} to={`/movies/` + moviesItem} className={classes.link}>
              <Button className={classes.root}> {moviesItem}</Button>;
               </Link>
          )
        }
      </div>

    </>

  );
};


export default MyFavourite;