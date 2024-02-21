import { createSlice } from "@reduxjs/toolkit";

const gptMovieSlice=createSlice({
    name:"gptMovie",
    initialState:{
        gptState:false,
        gptMovieResult:null,
        gptMovieName:null,
        userApiKey:null,
    },
    reducers:{
       setGptState:(state)=>
       {
        state.gptState=!state.gptState;
       },
       setGptMovie:(state,action)=>
       {
         const {movieName,movieResult}=action.payload;
         state.gptMovieResult=movieResult;
         state.gptMovieName=movieName;
       },
       setUserApiKey:(state,action)=>{
        state.userApiKey=action.payload
       }
    }
})

export const {setGptState,setGptMovie,setUserApiKey}=gptMovieSlice.actions;
export default gptMovieSlice.reducer;