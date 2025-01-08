import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ErrorPage from "./pages/ErrorPage";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import AboutUs from "./pages/AboutUs";
import MoviesContainer from "./Components/MoviesContainer/MoviesContainer";
import MovieDetails from "./pages/MovieDetails";
import WishList from "./pages/WishList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SearchBar />
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<MoviesContainer />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
