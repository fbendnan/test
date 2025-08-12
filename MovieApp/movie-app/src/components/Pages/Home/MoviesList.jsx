import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Search from "./SearchTerm";

const API_KEY = "c82ab0405fb981cfd52454edfc40eb87";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const url = query
  ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;

      const response1 = await axios.get(url);
      const response2 = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=2`);
      const res = [...response1.data.results, ...response2.data.results]
      setMovies(res);
    } catch (error) {
      console.error("error lors des chargements des films...", error);
      setMovies([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  if (loading) {
    return <p className="text-center mt-10">chargement des films...</p>;
  }

  return (
    <>
      <Search onSearch={handleSearch} />
      <div>
        <h1 className="text-4xl text-center text-red-600 font-bold mt-10 mb-6 border border-blue-100 mx-[480px] shadow py-4">
          Popular Films
        </h1>
        <ul className="flex flex-wrap justify-center gap-10">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                rating={movie.vote_average}
                date={movie.release_date}
              />
            ))
          ) : (
            <p className="text-center mt-10">Aucun film trouvé.</p>
          )}
        </ul>
      </div>
    </>
  );
}
