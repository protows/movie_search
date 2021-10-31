import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import TvSeries from "./pages/TvSeries/TvSeries";
import Home from "./pages/Home/Home";
import { ThemeProvider, createTheme } from '@material-ui/core';
import MoviesBreed from "./components/MoviesBreed/MoviesBreed";
import { useLocation } from "react-router";
import Movies from "./pages/Movies/Movies";

import TvSeriesBreed from "./components/TvSeriesBreed/TvSeriesBreed";
import { TodoProvider } from "./contexts/pagePagination.context";
import MyFavourite from "./components/MyFavourite/MyFavourite";

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

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
        {/* <img src="./img/404.jpg" alt="lorem" /> */}
        <img src="../img/404.jpg" alt="lorem" />
      </h3>
    </div>
  );
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <TodoProvider>
                <Route exact path="/tvSeries">
                  <TvSeries />
                </Route>

                <Route exact path="/movies" component={Movies} />

                <Route path="/movies/:breed">
                  <MoviesBreed />
                </Route>

                <Route path="/tvSeries/:breed">
                  <TvSeriesBreed />
                </Route>

                <Route path="/myFavourite">
                  <MyFavourite />
                </Route>

                <Route exact path="/">
                  <Home />
                </Route>

              </TodoProvider>
              <Route path="*">
                <NoMatch />
              </Route>

            </Switch>
          </div>
        </Router>
      </ThemeProvider >
    </>
  );
}

export default App;
