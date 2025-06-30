import { useState, useEffect, use } from "react";
import MovieCard from "../components/MovieCard";

import "./Movies.css";

const moviesUrl = import.meta.env.VITE_API;
const movieApiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [bestMovies, setBestMovies] = useState([]);

  const getBestMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setBestMovies(data.results);
  };

  useEffect(() => {
    const bestMoviesURL = `${moviesUrl}top_rated?${movieApiKey}`;
    getBestMovies(bestMoviesURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Best Movies:</h2>
      <div className="movies-container">
        {bestMovies.length === 0 && <p>Loading...</p>}
        {bestMovies.length > 0 &&
          bestMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Home;
