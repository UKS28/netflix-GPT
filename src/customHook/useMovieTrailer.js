import { addTrailerVideo } from '../utils/movieSlice';
import { MOVIE_API_OPTION } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotFoundPage from '../components/NotFoundPage';
const useMovieTrailer = (id) => {
    const dispatch=useDispatch();
    const getmovieVideo=async ()=>{
      try{
        const data= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", MOVIE_API_OPTION)
        const json= await data.json();
        const filterData=json.results.filter(video => video.type==="Trailer")
        const trailer=filterData.length? filterData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer))
      }
      catch(err)
      {
       return <NotFoundPage/>
      }
      }
    
      useEffect(()=>{
        getmovieVideo();
      },[]);
}

export default useMovieTrailer
