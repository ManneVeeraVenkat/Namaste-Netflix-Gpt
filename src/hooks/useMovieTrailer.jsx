/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { Api_Options } from "../utiles/constants";
import { addTrailerVideo } from "../utiles/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      Api_Options
    );

    if (!data.ok) {
      throw new Error("Failed to fetch movie videos");
    }
    const jsonData = await data.json();
    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    console.log(jsonData);

    const trailer = filterData.length ? filterData[0] : jsonData.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]); // Trigger useEffect whenever movieId changes
};

export default useMovieTrailer;
