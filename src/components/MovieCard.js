import React from 'react'
import { POSTER_PATH_CDN } from '../utils/constant';
import { Link } from "react-router-dom";
const MovieCard = ({poster_path,id}) => {
    if (!poster_path) return null;
  return (
    <Link to={"/browse/"+id}>
      <div className='movie-thumb aspect-[2/3] bg-shimmer overflow-hidden rounded'>
        <img src={POSTER_PATH_CDN+poster_path} alt='movie-poster'/>
      </div>
    </Link>
  )
}

export default MovieCard;
