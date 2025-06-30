import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./Movies.css";
const searchURL = import.meta.env.VITE_SEARCH;
const movieApiKey = import.meta.env.VITE_API_KEY;
const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearched = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${movieApiKey}&query=${query}`;
    getSearched(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Your results: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Loading...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Search;
