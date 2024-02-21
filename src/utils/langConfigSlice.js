import { createSlice } from "@reduxjs/toolkit";

const langConfig=createSlice({
    name:"langConfig",
    initialState:{
        language:"English",
    },
    reducers:{
        setLanguage:(state,action)=>{
            state.language=action.payload;
        }
    }
})

export const { setLanguage }=langConfig.actions;
export default langConfig.reducer;