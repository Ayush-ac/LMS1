import { createSlice } from "@reduxjs/toolkit";
import { basicData } from "../actions/api";

const initialState = {
    data: null,
    loading: false,
    error: null,
}

const basicDataSlice = createSlice({
    name:"basicData",
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(basicData.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.data = null;
        })
        .addCase(basicData.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = null;
            state.data = action.payload;
        })
        .addCase(basicData.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message;
            state.data = null;
        });
    },
});

export default basicDataSlice.reducer;