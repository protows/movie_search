import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, CircularProgress, Box } from "@material-ui/core";
import { purple } from '@material-ui/core/colors';
import { getPictures } from "../../services/movies_items.service";

interface Props { }

interface Params {
  breed: string;
}

const MoviesBreed = (props: Props) => {
  const { breed } = useParams<Params>();
  const [dogItemData, setDogItemData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   getPictures(breed)
  //     .then((res) => {
  //       setLoading(false);
  //       const { message } = res.data;
  //       setDogItemData(Object(message));

  //       console.log("dogItemData " + dogItemData);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <React.Fragment>
      <h4>Render8</h4>
      {/* {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
          dogItemData.slice(0, 3).map((dogItemDataPicture, index) => (
            <img src={dogItemDataPicture} alt="lorem" />
          ))
        )} */}
    </React.Fragment >
  );
}

// return <div>{breed}</div>;


export default MoviesBreed;


// const values = useParams();
//   console.log(values);


//   const ColorButton = withStyles((theme) => ({
//     root: {
//       color: theme.palette.getContrastText(purple[500]),
//       backgroundColor: purple[500],
//       '&:hover': {
//         backgroundColor: purple[700],
//       },
//     },
//   }))(Button);


//   // return <div>Dog Breed</div>;
//   return (
//     <>
//       <div>Dog Breed</div>
//       <Button variant="contained" >
//         Primary
//  </Button>
//       <ColorButton> ColorButton</ColorButton>

//     </>
//   )



