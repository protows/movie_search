import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import MovieElement from "./components/MovieElement/MovieElement";
import FavouriteComponent from "./components/FavouriteComponent/FavouriteComponent";
import TvSeries from "./pages/TvSeries/TvSeries";
import TvSeriesElement from "./components/TvSeriesElement/TvSeriesElement";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/tvSeries">
              <TvSeries />
            </Route>
            <Route exact path="/movies" component={Movies} />
            <Route path="/movie/:paramsElement">
              <MovieElement />
            </Route>
            <Route path="/tvSeries/:paramsTvSeries">
              <TvSeriesElement />
            </Route>
            <Route path="/favourite">
              <FavouriteComponent />
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
    </>
  );
}

export default App;
