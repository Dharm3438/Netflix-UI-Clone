import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
//import requests from "./requests";
//import axios from './axios';

const img_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, url, isLargeRow }) {
  const [movie, setMovie] = useState([]);
  const[trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://api.themoviedb.org/3${url}`);
      //console.log();
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [url]);

  //console.log(movie);

  const opts = {
    height: "390",
    width: "95%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* // title */}
      <h2>{title}</h2>

      {/* // container */}
      <div className="row__posters">
        {movie.map((mov) => (
          <img
            key={movie.id}
            onClick={() => handleClick(mov)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${img_url}${
              isLargeRow ? mov.poster_path : mov.backdrop_path
            }`}
            alt={mov.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
