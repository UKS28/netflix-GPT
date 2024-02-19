import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice(
    {
        name:"Movie",
        initialState:{
         nowPlayingMovies:null,
         popular:null,
         top_rated:null,
         upcoming:null,
         trailerVideo:null,
        },
        reducers:{
            addNowPlayingMovie:(state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo=action.payload;
            },
            addPopular:(state,action)=>{
                state.popular=action.payload;
            },
            addTopRated:(state,action)=>{
                state.top_rated=action.payload;
            },
            addUpcoming:(state,action)=>{
                state.upcoming=action.payload;
            }


        }
    }
)

export const {addNowPlayingMovie,addTrailerVideo,addUpcoming,addTopRated,addPopular}=movieSlice.actions;
export default movieSlice.reducer;