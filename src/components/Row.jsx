import React, { useState, useEffect } from "react";
import axios from "../axios";
import '../style/style.css';
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div>
      <h2 className="m-5 text-3xl text-white">{title}</h2>

      <div className="flex p-5 overflow-y-hidden overflow-x-scroll rowPosters">
        {movies.map((movie) => (
          <img  className={`object-contain w-full max-h-[100px] mr-[10px] rowPoster ${isLargeRow && "rowPosterLarge"}`} key={movie.id}
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  )
}

export default Row

