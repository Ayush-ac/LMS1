import { createSlice } from "@reduxjs/toolkit";
import { insuranceData } from "../actions/api";

const initialState = {
data: null,
loading:false,
error:null,
}

const insuranceDataSlice = createSlice({
    name:'insuranceData',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(insuranceData.pending, (state)=>{
            state.loading = true;
            state.data = null;
            state.error = null;
        })
        .addCase(insuranceData.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(insuranceData.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default insuranceDataSlice.reducer;