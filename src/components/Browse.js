import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHook/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycotainer';


const Browse = () => {
  useNowPlayingMovies();
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
