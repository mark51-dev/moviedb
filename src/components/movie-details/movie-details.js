import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getMovieById} from "../../store/actions/movies";
import {Link} from "react-router-dom";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const {movieDetails} = useSelector(({movieDetails}) => {
    return {
      movieDetails
    }
  });
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieById(id));
    // eslint-disable-next-line
  }, [dispatch]);
  console.log(movieDetails);

  return (
    <div>
      <Link to={'/'}>Go to main page</Link>
      <div>
        <img src={movieDetails.Poster} alt=""/>
      </div>
      <div>
        <h3>{movieDetails.Title}</h3>
      </div>
      <div>
        <span>{movieDetails.Rated}</span>
      </div>
      <div>
        <span>{movieDetails.Released}</span>
      </div>
      <div>
        <span>{movieDetails.Runtime}</span>
      </div>
      <div>
        <span>{movieDetails.Genre}</span>
      </div>
      <div>
        <span>{movieDetails.Director}</span>
      </div>
      <div>
        <span>{movieDetails.Writer}</span>
      </div>
      <div>
        <span>{movieDetails.Actors}</span>
      </div>
      <div>
        <span>{movieDetails.Plot}</span>
      </div>
      <div>
        <span>{movieDetails.Language}</span>
      </div>
      <div>
        <span>{movieDetails.Country}</span>
      </div>
      <div>
        <span>{movieDetails.Awards}</span>
      </div>
      <div>
        <span>{movieDetails.imdbRating}</span>
      </div>
      <div>
        <span>{movieDetails.imdbVotes}</span>
      </div>
    </div>
  );
};

export default MovieDetails;