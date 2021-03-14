import React, { useEffect, useState } from "react";
import axios from "../../axios";
import request from "../../request";
import "./banner.css"
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginal);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n){
   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
   )`,
        backgroundPosition: "Center",
      }}
    >
      <div className="content">
       <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1> 

        <div className="buttons">
          <button className="contant_button">Play</button>
          <button className="contant_button">My List</button>
        </div>
        <h1 className="description">
         {truncate(movie.overview,150)}
        </h1>
      </div>
      <div className="FadeIn" />
    </header>
  );
};

export default Banner;
