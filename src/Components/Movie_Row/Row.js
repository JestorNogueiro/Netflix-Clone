import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./row.css";
import YouTube from "react-youtube";

//tmdb url
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isOpen }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  //to play the youtube video
  const opts = {
    height: "360",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  // to fecht the trailer Url
  const handleTrailer = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=f38b930fadefbdf64dbde15b81209b2a`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="row">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleTrailer(movie)}
              className={`movie-poster ${isOpen && "row-LargePoster"}`}
              src={`${base_url}${
                isOpen ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {/*to show the vidoe on the website*/}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
