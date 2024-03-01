/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { Api_Options } from "../utiles/constants";
import { addNowPlayingMovies } from "../utiles/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      Api_Options
    );
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));
    console.log(jsonData.results);
  };
  useEffect(() => {
    nowPlayingMoviesList();
  }, []);
};

export default useNowPlayingMovies;
