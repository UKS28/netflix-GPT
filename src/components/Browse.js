import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHook/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycotainer';
import usePopularMovie from '../customHook/usePopularMovie';
import useTopRatedMovie from '../customHook/useTopRatedMovie';
import useUpcomingMovie from '../customHook/useUpcomingMovie';
import { useSelector } from 'react-redux';
import GptContainer from './GptContainer';


const Browse = () => {
  const gptState=useSelector(store=>store.gptMovie.gptState);
  // console.log(gptState);
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  return (
    <div>
      <Header/>
      {
        gptState?<GptContainer/>: 
        <>
          <Maincontainer/>
          <Secondarycontainer/>
        </>
      }
     
    </div>
  )
}

export default Browse
