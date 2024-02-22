import { useRef } from "react";
// import openai from "../utils/openAI";
import { MOVIE_API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setGptMovie, setUserApiKey } from "../utils/gptMovieSlice";
import language from "../utils/languageConstant";
import OpenAI from "openai";
import NotFoundPage from "./NotFoundPage";

const GptSearch = () => {

  const val=useRef();
  const apikeyval=useRef();
  const lang=useSelector(state=>state.langConfig.language);
  const userAPIKEY=useSelector(store=>store.gptMovie.userApiKey);
  const dispatch=useDispatch();  

  const searchMovieTMDB=async (movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",MOVIE_API_OPTION )
    const json=await  data.json();
    return json.results;
  }

  const handleClick=async ()=>{

    const searchText=val.current.value;
   
   
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
       searchText +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // commented
    try{

      const openai = new OpenAI({
        apiKey: userAPIKEY ,
        dangerouslyAllowBrowser: true,
        // This is the default and can be omitted
      });
     
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      // console.log(gptResults);
      // if(gptResults)
  
  
      const gptMovies=gptResults.choices?.[0]?.message?.content.split(", ");
   
      // const gptMovies=["Stree", "Bhool Bhulaiyaa", "Go Goa Gone", "Roohi", "Bhoot Police"];
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      // [Promise, Promise, Promise, Promise, Promise]
      
      // to resolve all movies
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(setGptMovie({movieName:gptMovies,movieResult:tmdbResults}));
    }
    catch(error)
    {
      return <NotFoundPage/>
    }
    
    
    // console.log(tmdbResults);
  }

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
       className="w-full md:w-1/2 bg-black grid grid-cols-12"
       onSubmit={(ev)=>ev.preventDefault()}>
        <input 
          ref={val}
          className=" p-4 m-4 col-span-9"
          type="text"
          placeholder={language[lang].gptPlaceHolder}
        />
         
        <button 
         className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
         onClick={handleClick}
         >
        {language[lang].search}
         </button>
         <input 
          ref={apikeyval}
          className="p-1 col-span-7 ml-24 mb-4 "
          type="password"
          placeholder="enter your gpt API Key"
          onChange={(e)=>dispatch(setUserApiKey(e.target.value))}
        />

      </form>
     
    </div>
  )
}

export default GptSearch
