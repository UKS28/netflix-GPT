import { useSelector } from "react-redux"
import Videobackground from "./Videobackground"
import Videotitle from "./Videotitle"


const Maincontainer=()=>{
    const movie=useSelector((store)=> store.movie?.nowPlayingMovies);
    if(!movie) return ;
    const mainMovie=movie[0];
    // console.log(mainMovie)
    const { title ,overview ,id }=mainMovie;
    // console.log(title,overview);
  return (
    <div>
        <Videotitle title={title} overview={overview}/>
        <Videobackground id={id}/>
        <div>main compoent</div>
    </div>
  )
}

export default Maincontainer