import { MOVIE_API_OPTION } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addRecommeded } from '../utils/movieSlice';

const useRecommendedMovies = (id) => {

    const dispatch=useDispatch()
    const getRecommended=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/recommendations?language=en-US&page=1",MOVIE_API_OPTION) 
        const json=await data.json();
        console.log(json.results);
        dispatch(addRecommeded(json.results));
       }

    useEffect(()=>{
        getRecommended();
    })   
}

export default useRecommendedMovies
