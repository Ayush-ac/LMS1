import { createSlice } from "@reduxjs/toolkit";
import { furtherData } from "../actions/api";

const initialState = {
data: null,
loading:false,
error:null,
}

const furtherDataSlice = createSlice({
    name:'furtherData',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(furtherData.pending, (state)=>{
            state.loading = true;
            state.data = null;
            state.error = null;
        })
        .addCase(furtherData.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(furtherData.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default furtherDataSlice.reducer;