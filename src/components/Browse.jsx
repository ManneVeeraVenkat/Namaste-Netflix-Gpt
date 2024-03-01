import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  // we creating custom hooks for code so it will look goood
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />

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
