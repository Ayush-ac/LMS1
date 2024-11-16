import { createSlice } from "@reduxjs/toolkit";
import { witnessData } from "../actions/api";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const witnessDataSlice = createSlice({
  name: "witnessData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(witnessData.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    })
    .addCase(witnessData.fulfilled, (state,action)=>{
        state.loading = false;
        state.data = action.payload;
        state.error = null;
    })
    .addCase(witnessData.rejected, (state,action)=>{
        state.loading = false;
        state.data = null;
        state.error = action.error.message
    })
  },
});

export default witnessDataSlice.reducer;

