import { createSlice } from "@reduxjs/toolkit";
import { policeData } from "../actions/api";

const initialState = {
data: null,
loading:false,
error:null,
}

const policeDataSlice = createSlice({
    name:'policeData',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(policeData.pending, (state)=>{
            state.loading = true;
            state.data = null;
            state.error = null;
        })
        .addCase(policeData.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(policeData.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default policeDataSlice.reducer;