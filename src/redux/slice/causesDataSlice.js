import { createSlice } from "@reduxjs/toolkit";
import { causesData } from "../actions/api";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const causesDataSlice = createSlice({
  name: "causesData",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(causesData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(causesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(causesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = null;
      });
  },
});

export default causesDataSlice.reducer;
