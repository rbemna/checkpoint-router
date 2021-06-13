import React from "react";
import MovieCard from "../movieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ moviesData, search, rating }) => {
  return (
    <div className="moviesList">
      {moviesData
        .filter((el) => el.title.toLowerCase().includes(search))
        .filter((el) => el.rating >= rating)

        .map((movieCard, key) => (
          <MovieCard movieCard={movieCard} key={key} />
        ))}
    </div>
  );
};

export default MovieList;
