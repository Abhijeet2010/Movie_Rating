import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AppUrl } from "./context";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let setTime = setTimeout(() => {
      getMovies(`${AppUrl}?i=${id}&apikey=4598e5a0`);
    }, 800);
    return () => clearTimeout(setTime);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-loading">
        <div className="loading">
          <h2>Loading... Wait 2sec</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="single-movie">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>

        <div className="movie-text">
          <div className="movie-title">
            <h2>{movie.Title}</h2>
          </div>
          <div className="movie-info">
            <p className="card-info-text">{movie.Released}</p>
            <p className="card-info-text">{movie.Genre}</p>
            <p className="card-info-text">{movie.imdbRating}/10</p>
            <p id="last" className="card-info-text">{movie.Country}</p>
            <NavLink to="/" className="btn">Go Back</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
