
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions/api";

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = '';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  }
});
const userReducer=userSlice.reducer;

export default userReducer;
