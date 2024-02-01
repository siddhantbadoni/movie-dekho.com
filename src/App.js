import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieSummary from "./components/MovieSummary";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from API and update the state
  const fetchMovies = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Function to set the selected movie
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <Navbar />
      <div className="movies-section">
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
        {/* Pass selectedMovie as a prop to MovieSummary */}
        <MovieSummary selectedMovie={selectedMovie} />
      </div>
    </>
  );
}

export default App;
