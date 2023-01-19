import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getUsers = createAsyncThunk("gets/data", async () => {
  return Axios.get("https://fakestoreapi.com/products").then((res) => {
    return res.data;
  });
});

const userSlice = createSlice({
  name: "data",
  initialState: {
    title: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.title = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
