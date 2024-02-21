import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptReducer from "./gptMovieSlice"
import langConfigReducer from "./langConfigSlice"
const appStore=configureStore({
    reducer:{
        user: userReducer,
        movie:movieReducer,
        gptMovie:gptReducer,
        langConfig:langConfigReducer,
    }
})

export default appStore;