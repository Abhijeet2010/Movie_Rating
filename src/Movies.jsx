import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./context";
import "./Movies.css";

const Movies = () => {
  const { movie } = useContext(AppContext);
  const num = 15;

  return (
    <div className="grid grid-4-col">
      {movie.map((currMovie) => {
        const { Title, Poster, imdbID } = currMovie;
        const movieName = Title.substring(0, 15);
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className="card">
              <div className="card-info">
                <h2>{movieName}</h2>
                <img src={Poster} alt={imdbID} />
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
export default Movies;
