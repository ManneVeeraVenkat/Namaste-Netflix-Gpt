/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../utiles/constants";
import { addTopRatedTvShows } from "../utiles/moviesSlice";
import { useEffect } from "react";

const useTopRatedTvShows = () => {
  const dispatch = useDispatch();

  const topRatedTvShows = useSelector((store) => store.movies.topRatedTvShows);

  const getTopRatedTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      Api_Options
    );
    const json = await data.json();
    dispatch(addTopRatedTvShows(json.results));
  };

  useEffect(() => {
    !topRatedTvShows && getTopRatedTvShows();
  }, []);
};

export default useTopRatedTvShows;
