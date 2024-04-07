import React from 'react'
import { useSelector } from "react-redux";
import Movielist from "./Movielist";
const SimilarContent = () => {
    const movie=useSelector(store=>store.movie)
    //  console.log(movie.nowPlayingMovies)
     return (
      movie.similarMovie &&
       ( <div className="bg-black w-screen aspect-video">
         <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
            <Movielist title={"Recommended Movies"} movies={movie.recommenended} />
            <Movielist title={"Similar Movies"} movies={movie.similarMovie} />
         </div>
        </div>

       )
     )
}

export default SimilarContent
