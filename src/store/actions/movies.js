import axios from 'axios';
import {FETCH_MOVIE_BY_ID, FETCH_MOVIE_BY_NAME} from "./actionTypes";

export function getMovieByName(movieName) {
  return async dispatch => {
    const movies =  await axios.get(`http://www.omdbapi.com/?apikey=45e9d07a&s=${movieName}`).then(res => {
      return res.data['Search'];
    });
    dispatch({
      type: FETCH_MOVIE_BY_NAME,
      payload: movies
    });
  }
}

export function getMovieById(movieId) {
  return async dispatch => {
    const movie =  await axios.get(`http://www.omdbapi.com/?apikey=45e9d07a&i=${movieId}`).then(res => {
      return res.data;
    });
    dispatch({
      type: FETCH_MOVIE_BY_ID,
      payload: movie
    });
  }
}