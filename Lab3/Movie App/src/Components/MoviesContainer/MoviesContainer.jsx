import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";

function MoviesContainer() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=827b28b0eb794d53b50ea01d62cc6509"
      )
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies?.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard moviedata={movie} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MoviesContainer;
