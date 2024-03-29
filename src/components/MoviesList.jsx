import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className=" text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movieId={movie.id}
              movieTitle={movie.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
