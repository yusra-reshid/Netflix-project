import { useEffect, useState } from "react";
import "./banner.css";
import requests from "../../utils/requests";
import axios from "../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handlePlay = () => {
    if (trailerUrl) {
      setTrailerUrl(""); // close if already open
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Trailer not found:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const backgroundImage = movie?.backdrop_path
    ? `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
    : "url('https://via.placeholder.com/1500x800?text=No+Image')"; // fallback

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: backgroundImage,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play" onClick={handlePlay}>
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBotton" />

      {/* Trailer Popup */}
      {trailerUrl && (
        <div className="banner__trailer">
          <button
            className="banner__close"
            onClick={() => setTrailerUrl("")}
          >
            X
          </button>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </header>
  );
};

export default Banner;
