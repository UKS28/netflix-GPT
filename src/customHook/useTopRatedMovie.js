import { useDispatch } from "react-redux";
import { MOVIE_API_OPTION } from "../utils/constant";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRatedMovie = () => {
    const dispatch=useDispatch();

    const getTopRatedMovie= async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', MOVIE_API_OPTION);
        const json=await data.json();
        dispatch(addTopRated(json.results));
    }

    useEffect(()=>{
        getTopRatedMovie();
    },[]);
}

export default useTopRatedMovie;
