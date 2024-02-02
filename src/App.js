import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieSummary from "./components/MovieSummary";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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

  const scrollToSummary = () => {
    if (summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    scrollToSummary();
  };
  const summaryRef = useRef(null);

  return (
    <>
      <Navbar />
      <div className="movies-section">
        <MovieList onMovieClick={handleMovieClick} movies={movies} />
        <div ref={summaryRef}>
          <MovieSummary selectedMovie={selectedMovie} />
        </div>
      </div>
    </>
  );
}

export default App;
