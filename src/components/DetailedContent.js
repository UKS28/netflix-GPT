import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Videobackground from './Videobackground';
import { MOVIE_API_OPTION } from '../utils/constant';
import Videotitle from './Videotitle';
const DetailedContent = () => {
    const {id}=useParams(); 
    const [title,setTitle]=useState("");
    const [overview,setOverview]=useState("");
    
    // https://api.themoviedb.org/3/movie/559?language=en-US 
    const getMovieDetail=async()=>{
    //    const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"?language=en-US");
       const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"?language=en-US",MOVIE_API_OPTION);
       const json=await data.json();
       setTitle(json.title);
       setOverview(json.overview);
    }

    useEffect(()=>{
        getMovieDetail(id);
    },[]);

    
  return (
    <div>
        <Videotitle title={title} overview={overview} id={id}/>
        <Videobackground id={id}/>
        <div>main compoent</div>
    </div>
  )
}

export default DetailedContent
