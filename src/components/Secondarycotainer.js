import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import Shimmer from "./Shimmer";

const Secondarycontainer=()=>{
   const movie=useSelector(store=>store.movie)
    //  console.log(movie.nowPlayingMovies)
    if(movie.nowPlayingMovies===null)
       return <Shimmer/> 

     return (
      movie.nowPlayingMovies &&
       ( <div className="bg-black w-screen aspect-video">
         <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
            <Movielist title={"Now Playing"} movies={movie.nowPlayingMovies} />
            <Movielist title={"Popular"}     movies={movie.popular} />
            <Movielist title={"Top Rated"} movies={movie.top_rated} />
            <Movielist title={"Upcoming"} movies={movie.upcoming} />
         </div>
        </div>

       )
     )
}

export default Secondarycontainer;
