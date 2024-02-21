import { useSelector } from "react-redux"
import Movielist from "./Movielist";

const GptMovie = () => {
  const gptMovie=useSelector( store =>store.gptMovie);
  
  const {gptMovieName,gptMovieResult}=gptMovie;
  if (!gptMovieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      
      <div>
        {gptMovieName.map((movieName, index) => (
          <Movielist
            key={movieName}
            title={movieName}
            movies={gptMovieResult[index]}
          />
        ))}
      </div>
    </div>
  )
}


export default GptMovie
