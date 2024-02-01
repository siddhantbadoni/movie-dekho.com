import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieSummary.css";
import FormModal from "./FormModal"; // Import FormModal

const MovieSummary = ({ selectedMovie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container movie-summary-container">
      <h2>Movie Summary</h2>
      <div className="row border p-5">
        <div className="col-md-8">
          {selectedMovie ? (
            <div className="card movie-summary-card">
              <h2 className="movie-summary-title">{selectedMovie.show.name}</h2>
              <p
                className="movie-summary-description"
                dangerouslySetInnerHTML={{ __html: selectedMovie.show.summary }}
              ></p>
              <h6>
                Genre - {selectedMovie.show.genres[0]} ,
                {selectedMovie.show.genres[1]}
              </h6>

              <h6>Langauge - {selectedMovie.show.language}</h6>
              <button className="btn btn-primary mt-3" onClick={openModal}>
                Book Your Ticket
              </button>
              {/* Use FormModal as a self-closing tag */}
              <FormModal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedMovie={selectedMovie}
              />
            </div>
          ) : (
            <h3 className="user-guide movie-card-container">
              Click on Movies for More Information 👈
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;
