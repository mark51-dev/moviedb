import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router';
import MoviesList from "./components/movies-list/movies-list";
import MovieDetails from "./components/movie-details/movie-details";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/movie/:id" component={MovieDetails}/>
        <Route path="/" component={MoviesList} exact />
        <Route><Redirect to={'/'} /></Route>
      </Switch>
    </div>
  );
}

export default App;
