import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ErrorPage from "./assets/pages/ErrorPage";
import Header from "./assets/Components/Header/Header";
import SearchBar from "./assets/Components/SearchBar/SearchBar";
import AboutUs from "./assets/pages/AboutUs";
import MoviesContainer from "./assets/Components/MoviesContainer/MoviesContainer";
import MovieDetails from "./assets/Components/MovieDetails/MovieDetails";

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
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
