import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({movies}) {
const params = useParams()
console.log(params)

const movie = movies.find(movie => movie.id === parseInt(params.movieId))

  return (

    <div>
      <h4>{movie.title}</h4>
      <h3>Movies Show Component!</h3>
    </div>
  );
}

export default MovieShow;