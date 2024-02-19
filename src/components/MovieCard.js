import React from 'react'
import { POSTER_PATH_CDN } from '../utils/constant';

const MovieCard = ({poster_path}) => {
    if (!poster_path) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img src={POSTER_PATH_CDN+poster_path} alt='movie-poster'/>
    </div>
  )
}

export default MovieCard;
