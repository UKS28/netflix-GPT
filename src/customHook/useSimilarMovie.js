import React from 'react'
import { MOVIE_API_OPTION } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addSimilarMovie } from '../utils/movieSlice';
const useSimilarMovie = (id) => {
    const dispatch=useDispatch()
     
    const getSimilar = async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/similar?language=en-US&page=1",MOVIE_API_OPTION) 
        const json=await data.json();
        console.log(json.results);
        dispatch(addSimilarMovie(json.results));
       }



     useEffect(()=>{
       getSimilar();
     },[]);  

}

export default useSimilarMovie
