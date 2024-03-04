import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedTvShows from "../hooks/useTopRatedTvShows";

const Browse = () => {
  // we creating custom hooks for code so it will look goood
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTopRatedTvShows();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* { design of body 
        maincontainer
          -videoBackGround
          -videotitle
        secondary Container
          -moviesList*n rows
             cards*n 

      } */}
    </div>
  );
};

export default Browse;
