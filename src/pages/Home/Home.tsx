// import { selectFavourite } from "../../store/favourite/favourite.selector";
// import { useAppSelector } from "../../store/hooks";
import useStyles from "./Home.styles";

interface Props { }

const Home = (props: Props) => {

  const classes = useStyles();
  // const itemFavourite = useAppSelector(selectFavourite);

  return (
    <>
      <div className={classes.mainText}>
        КиноПо́иск» — крупнейший русскоязычный интернет-сервис о кино. С 2018 года также доступен онлайн-кинотеатр с несколькими тысячами фильмов, сериалов,
      </div>
      {/* <div className={classes.favourite}>Список избранных:
        {itemFavourite.length === 0 && <p> Пусто</p>}
        <div className={classes.favouriteItems}>
          {itemFavourite
            .map((moviesItem) =>
              moviesItem + ", "
            )}
        </div>

      </div> */}
    </>
  )
};

export default Home;
