/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    if (movies) {
      const newIndex = Math.floor(Math.random() * movies.length);
      setRandomIndex(newIndex);
    }
  }, [movies]);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[randomIndex];
  const { original_title, overview, id } = mainMovie;


  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
