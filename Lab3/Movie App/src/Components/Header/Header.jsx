import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseCounter } from "../../store/slices/CountWishList";

function Header() {
  const wishlistValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
                <NavLink className="nav-link" to="/wishlist">
                  WishList
                </NavLink>
              </div>
              <div className="navbar-nav">
                <div className="nav-link">
                  <FontAwesomeIcon icon={faHeart} />
                  <span> {wishlistValue}</span>
                </div>
                <select className="nav-link " name="language">
                  <option>en</option>
                  <option>ar</option>
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
