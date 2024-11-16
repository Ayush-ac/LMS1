import { createSlice } from "@reduxjs/toolkit";
import { combineData } from "../actions/api";

const initialState = {
  data: null,    
  loading: false,
  error: null,
};

const combineDataSlice = createSlice({
  name: "combineData",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(combineData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(combineData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;  
      })
      .addCase(combineData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default combineDataSlice.reducer;
