import {FETCH_MOVIE_BY_ID, FETCH_MOVIE_BY_NAME} from "../actions/actionTypes";

const initialState = {
  films: [],
  movieDetails: {}
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_BY_NAME:
      return {
        ...state,
        films: [...action.payload]
      };
    case FETCH_MOVIE_BY_ID:
      return {
        ...state,
        movieDetails: {...action.payload}
      }
    default:
      return state;
  }
}

export default moviesReducer;