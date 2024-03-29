// MovieList.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieList.css";

const MovieList = ({ movies, onMovieClick }) => {
  // Check if movies is undefined, and provide an empty array as a default
  const movieList = movies || [];
  console.log(movies);
  const handleMovieClick = (movie) => {
    onMovieClick(movie);
  };

  return (
    <div className="container movie-list-container">
      <h2>Movie List</h2>
      <div className="row movie-list">
        {movieList.map((movie) => (
          <div
            key={movie.show && movie.show.id}
            className="col-lg-4 col-md-6 col-xs-12 movie-card-container"
          >
            <div
              className="card movie-card"
              onClick={() => handleMovieClick(movie)}
            >
              {movie.show && movie.show.image && movie.show.image.medium ? (
                <img src={movie.show.image.medium} alt={movie.show.name} />
              ) : (
                <p className="no-image-text">No image available</p>
              )}
              <div className="movie-details">
                <h3 className="movie-title">{movie.show.name}</h3>
                {movie.show.rating && movie.show.rating.average ? (
                  <p className="movie-rating">
                    <h6>Rating - {movie.show.rating.average} ⭐⭐⭐</h6>
                  </p>
                ) : (
                  <p className="movie-rating">
                    <h6>No rating available</h6>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
