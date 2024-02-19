import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { MOVIE_API_OPTION } from "../utils/constant";
import { addUpcoming } from "../utils/movieSlice";


const useUpcomingMovie = () => {
  const dispatch=useDispatch();
  const getUpcomingMovie=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', MOVIE_API_OPTION);
    const json=await data.json();
    dispatch(addUpcoming(json.results));
  }
  useEffect(()=>{
    getUpcomingMovie();
  },[])

}

export default useUpcomingMovie
