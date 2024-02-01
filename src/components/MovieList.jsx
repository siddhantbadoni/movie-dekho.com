import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieList.css";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // Fetch movies from API and update the state
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          " https://api.tvmaze.com/search/shows?q=all"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div className="container movie-list-container">
      <h2>Movie List</h2>
      <div className="row movie-list">
        {movies.map((movie) => (
          <div key={movie.show && movie.show.id} className="col-md-4">
            <div className="card movie-card">
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
