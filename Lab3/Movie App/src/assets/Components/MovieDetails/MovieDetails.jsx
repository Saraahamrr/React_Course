import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router";

function MovieDetails() {
  const [moviedata, setMoviedata] = useState();
  const params = useParams();
  //console.log(params);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=827b28b0eb794d53b50ea01d62cc6509`
      )
      .then((res) => setMoviedata(res.data))
      .catch((error) => console.error(error));
  }, [params.id]);

  const poster_path = moviedata?.poster_path;

  return (
    <>
      <h2>{moviedata?.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={moviedata?.title}
      />
      <p>{moviedata?.overview}</p>
    </>
  );
}

export default MovieDetails;
