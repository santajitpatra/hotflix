import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../requests";

const base_url = "https://image.tmdb.org/t/p/original/";
const Header = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchHotflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="text-white object-contain h-[564px] "
      style={{
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-[30px] pt-[140px] h-[190px] ">
        <h1 className="font-extrabold text-5xl pb-[0.3rem] mt-28">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <p className="w-[45rem] leading-[1.3rem] pt-4 text-xs max-w-[360px] h-20">
          {truncate(movie?.overview, 150)}
        </p>
      </div>
      <div className="mt-64 headerFade" />
    </header>
  );
};

export default Header;
