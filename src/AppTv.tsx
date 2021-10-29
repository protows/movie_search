import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import TvSeries from "./pages/TvSeries/TvSeries";
import Home from "./pages/Home/Home";
import { ThemeProvider, createTheme } from '@material-ui/core';
import MoviesBreed from "./components/MoviesBreed/MoviesBreed";
import { useLocation } from "react-router";
import Movies from "./pages/Movies/Movies";

import { TodoProvider } from "./contexts/pagePagination.context";



const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(182, 144, 22, 1)'
    },
    secondary: {
      main: 'rgba(182, 144, 22, 1)'
    }
  }
});



function AppTv() {
  return (

    <>



      <TodoProvider>
        <Movies />
      </TodoProvider>


    </>
  );
}

export default AppTv;
