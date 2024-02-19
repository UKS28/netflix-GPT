import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHook/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycotainer';
import usePopularMovie from '../customHook/usePopularMovie';
import useTopRatedMovie from '../customHook/useTopRatedMovie';
import useUpcomingMovie from '../customHook/useUpcomingMovie';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
      browse
    </div>
  )
}

export default Browse
