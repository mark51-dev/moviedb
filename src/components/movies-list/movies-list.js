import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovieByName} from '../../store/actions/movies';
import Movie from "./movie/movie";


const MoviesList = () => {
  const dispatch = useDispatch();
  const { films } = useSelector(({films}) => {
    return {
      films
    }
  });

  const handleClick = (e) => {
    if (e.keyCode === 13) {
      dispatch(getMovieByName(e.target.value));
    }
  }

  const getAllMovies = () => {
    return films.map((film, index) => <Movie key={index} film={film}/>)
  }

  return (
    <div>
      <input type="text" onKeyUp={handleClick}/>
      { getAllMovies() }
    </div>
  );
};

export default MoviesList;