import React from "react";
import { useNavigate } from "react-router";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
} from "../../store/slices/CountWishList";
import { useState } from "react";
import "./MovieCard.css";

function MovieCard(props) {
  const [click, setClicked] = useState();

  const addtoWishlist = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (click === true) {
      dispatch(decreaseCounter(addtoWishlist - 1));
      setClicked(!click);
    } else {
      dispatch(increaseCounter(addtoWishlist + 1));
      setClicked(!click);
    }
  };
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
          <h5 className="card-title">{moviedata.title}</h5>{" "}
          <FontAwesomeIcon
            className="heart"
            icon={faHeart}
            onClick={handleClick}
            style={{ color: click ? "red" : "yellow" }}
          />
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
