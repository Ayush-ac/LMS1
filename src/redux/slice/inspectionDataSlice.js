import { createSlice } from "@reduxjs/toolkit";
import { inspectionData } from "../actions/api";

const initialState = {
data: null,
loading:false,
error:null,
}

const inspectionDataSlice = createSlice({
    name:'inspectionData',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(inspectionData.pending, (state)=>{
            state.loading = true;
            state.data = null;
            state.error = null;
        })
        .addCase(inspectionData.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(inspectionData.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default inspectionDataSlice.reducer;