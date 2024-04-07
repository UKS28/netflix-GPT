import { MOVIE_API_OPTION } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovie } from '../utils/movieSlice'
import { useEffect } from 'react';
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch(); 
    const getMovies=async ()=>{
      const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_API_OPTION)
      const json=await data.json();
       // console.log(json.results)
      dispatch(addNowPlayingMovie(json.results));
    }
    
    useEffect(()=>{
      getMovies();
    },[]);
}



export default useNowPlayingMovies;