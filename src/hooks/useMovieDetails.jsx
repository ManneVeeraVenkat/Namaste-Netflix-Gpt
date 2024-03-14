/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { Api_Options } from "../utiles/constants";
import { useEffect } from "react";
import { addMovieDetails } from "../utiles/moviesSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      Api_Options
    );

    if (!data.ok) {
      throw new Error("Failed to fetch movie videos");
    }
    const jsonData = await data.json();

    console.log(jsonData);

    dispatch(addMovieDetails(jsonData));
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]); // Trigger useEffect whenever movieId changes
};

export default useMovieDetails;
