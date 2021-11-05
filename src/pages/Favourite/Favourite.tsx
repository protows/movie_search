import useStyles from "../Home/Home.styles";
import { selectFavourite } from "../../store/favourite/favourite.selector";
import { useAppSelector } from "../../store/hooks";

interface Props { }

const FavouriteComponent = (props: Props) => {
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

export default FavouriteComponent;
