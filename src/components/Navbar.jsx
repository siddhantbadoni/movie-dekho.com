import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        MovieDekho.com
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-3">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Your Movie"
          aria-label="Search"
          mr-sm-2
          mx-5
        />
      </form>
    </nav>
  );
};

export default Navbar;
