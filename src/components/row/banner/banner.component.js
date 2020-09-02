import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../../Request";
import "./banner.css";

const Banner = () => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`http://api.themoviedb.org/3${requests.featchNetflixOriginals}`)
      .then((res) => {
        setMovie(
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        );
      });
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
