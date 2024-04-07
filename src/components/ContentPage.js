import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailedContent from './DetailedContent';
import SimilarContent from './SimilarContent';
import { MOVIE_API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux'
import { addSimilarMovie } from '../utils/movieSlice';
import useSimilarMovie from '../customHook/useSimilarMovie';
import useRecommendedMovies from '../customHook/useRecommendedMovies';
import Header from './Header';

const ContentPage = () => {
    const {id}=useParams();
    // console.log(id);
    useSimilarMovie(id);  
    useRecommendedMovies(id);

    return (
        <div>
         {/* <Header/>    */}
        <DetailedContent/>
        <SimilarContent/>
        </div>
    )
}

export default ContentPage
