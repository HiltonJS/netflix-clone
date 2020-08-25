import React, { useState, useEffect } from "react";
import axios from "axios";
import instance from "../../axios";
import "./row.css";
const base_url = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://api.themoviedb.org/3${fetchUrl}`).then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
