import React from "react";
import "./SearchBar.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  //   const [movies, setMovies] = useState([]);
  //     const getMovies = async () => {
  //         const response = await fetch(
  //         `https://api.themoviedb.org/3/search/movie?api_key=6f4d7e8d3b6f2d6f6b3c1e6a9c5c1b7e&language=en-US&query=${search}&page=1&include_adult=false`
  //         );
  //         const data = await response.json();
  //         setMovies(data.results);
  //     };
  return (
    <>
      <div className="container my-5">
        <h1>Welcome to the Movie App</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="search" className="form-label">
            Millions of movies,tv shows and people to discover. Explore now.
          </label>
          <div className="input-group mb-3">
            <input
              id="search"
              type="text"
              className="form-control"
              placeholder="Search for a movie"
              aria-label="Search for a movie"
              aria-describedby="button-addon2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
