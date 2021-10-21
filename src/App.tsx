import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import TvSeries from "./pages/TvSeries/TvSeries";
import Dogs from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import { ThemeProvider, createTheme, withStyles } from '@material-ui/core';
import MoviesBreed from "./components/MoviesBreed/MoviesBreed";
import { useLocation } from "react-router";
import Movies from "./pages/Movies/Movies";



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
        <img src="./img/404.jpg" alt="lorem" />
      </h3>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route path="/movies/:breed">
              <MoviesBreed />
            </Route>
            <Route exact path="/tvSeries">
              <TvSeries />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider >
  );
}

export default App;
