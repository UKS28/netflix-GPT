import React from 'react'
import { POSTER_PATH_CDN } from '../utils/constant';

const MovieCard = ({poster_path}) => {
    if (!poster_path) return null;
  return (
    <div className='movie-thumb aspect-[2/3] bg-shimmer overflow-hidden rounded'>
      <img src={POSTER_PATH_CDN+poster_path} alt='movie-poster'/>
    </div>
  )
}

export default MovieCard;
