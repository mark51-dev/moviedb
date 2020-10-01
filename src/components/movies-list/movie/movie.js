import React from 'react';
import {Link} from "react-router-dom";

const Movie = ({film: {Title, Year, imdbID, Type, Poster}}) => {

  return (
    <div>
      <div>
        <img src={Poster} alt=""/>
      </div>
      <span>{Title}</span>
      <span>{Year}</span>
      <div>{Type}</div>
      <Link to={`/movie/${imdbID}`}>More</Link>
    </div>
  );
};

export default Movie;