import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieList.css";
const MovieList = () => {
  return (
    <div className="container movie-list-container ">
      <h2>Movie List</h2>
      <div className="row">
        {/* {movies.map((movie) => (
          <div key={movie.id} className="col-md-4"> */}
        <div className="card movie-card">
          <img
            src={`https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg`}
            alt={`jai ho`}
          />
          <div className="movie-details">
            <h3 className="movie-title">jaadugar</h3>
            <p className="movie-description">
              kabootar uda pahucha aasmaan mein
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
