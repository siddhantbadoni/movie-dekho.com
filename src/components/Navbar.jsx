import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand px-2" href="/">
        MovieDekho.com
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-3">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Your Movie"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
