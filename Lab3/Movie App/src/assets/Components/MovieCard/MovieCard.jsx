import React from "react";
import { useNavigate } from "react-router";

function MovieCard(props) {
  const { moviedata } = props;
  const poster_path = moviedata.poster_path;
  //console.log(props);
  const TrimText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const Navigate = useNavigate();
  const handleRedirect = () => {
    Navigate(`/movie/${moviedata.id}`);
  };

  return (
    <>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="card-img-top"
          alt={moviedata.title}
        />
        <div className="card-body">
          <h5 className="card-title">{moviedata.title}</h5>
          <p className="card-text">{TrimText(moviedata.overview, 130)}</p>
          <button onClick={handleRedirect} className="btn btn-primary">
            More Details
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
