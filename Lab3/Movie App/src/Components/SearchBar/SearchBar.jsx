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
