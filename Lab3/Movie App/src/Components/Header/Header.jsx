import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import { changeLanguage } from "../../store/slices/Language";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Header() {
  const wishlistValue = useSelector((state) => state.counter.value);
  const [lang, setLang] = useState();
  const dispatch = useDispatch();

  const handleLanguage = (e) => {
    if (e.target.value === "ar") {
      dispatch(changeLanguage("ar"));
      setLang("ar");
    } else {
      dispatch(changeLanguage("en"));
      setLang("en");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">Movie App</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="d-flex justify-content-between w-100">
              <div className="navbar-nav">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
                <NavLink className="nav-link" to="/watchlist">
                  WatchList
                </NavLink>
              </div>
              <div className="navbar-nav">
                <div className="nav-link">
                  <FontAwesomeIcon icon={faHeart} />
                  <span> {wishlistValue}</span>
                </div>
                <select
                  className="nav-link "
                  name="language"
                  onClick={handleLanguage}
                >
                  <option value="en">en</option>
                  <option value="ar">ar</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
