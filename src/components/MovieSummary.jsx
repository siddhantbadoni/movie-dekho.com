import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieSummary.css";
const MovieSummary = () => {
  //   const { id } = useParams();

  // useEffect(() => {
  //   // Fetch movie details for the specific movieId
  //   // Example: fetchMovieDetails(id).then(data => console.log(data));
  // }, [id]);

  return (
    <div className="container movie-summary-container">
      <h2>Movie Summary</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card movie-summary-card">
            <h3 className="movie-summary-title">Movie Title</h3>
            <p className="movie-summary-description">
              Movie description goes here.
            </p>
            {/* Add more movie details as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;
