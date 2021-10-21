import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, CircularProgress, Box } from "@material-ui/core";
import { purple } from '@material-ui/core/colors';
import { getTvSeriesData } from "../../services/tvSeries.service";

interface Props { }

interface Params {
    breed: string;
}

const TvSeriesBreed = (props: Props) => {
    const [catItemData, setCatItemData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getTvSeriesData()
            .then((res) => {
                setLoading(false);
                setCatItemData(res.data);

                console.log("catItemData " + catItemData);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <React.Fragment>
            <h4>Render8</h4>
            {loading ? (
                <Box display="flex" justifyContent="center">
                    <CircularProgress />
                </Box>
            ) : (
                    catItemData.map((catItemDataPicture, index) => (
                        <img src={catItemDataPicture.image.url} alt="lorem" />
                    ))
                )}
        </React.Fragment >
    );
}

export default TvSeriesBreed;



