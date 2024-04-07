import { addTrailerVideo } from '../utils/movieSlice';
import { MOVIE_API_OPTION } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const useMovieTrailer = (id) => {
    const dispatch=useDispatch();
    const getmovieVideo=async ()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", MOVIE_API_OPTION)
        const json= await data.json();
        const filterData=json.results.filter(video => video.type==="Trailer")
        const trailer=filterData.length? filterData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer))
      }
    
      useEffect(()=>{
        getmovieVideo();
      },[]);
}

export default useMovieTrailer
