import { useEffect } from "react";
import { MOVIE_API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const usePopularMovie=()=>{
    const dispatch=useDispatch();

    const getPopularMovie=async()=>{
     const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', MOVIE_API_OPTION);
     const json =await data.json(); 
     //  console.log(json.results);
     dispatch(addPopular(json.results));
     
    }
    useEffect(()=>{
       getPopularMovie();
    },[])
}

export default usePopularMovie;