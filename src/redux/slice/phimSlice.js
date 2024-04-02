//Cách xử lý bất đồng bộ
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import { handleOffLoading, handleOnLoading } from "./loadingSlice";

const initialState = {
  arrMovie: [],
};

export const getAllMovieThunk = createAsyncThunk(
  "quanLyPhim/getAllMovieThunk",
  async (dataLocal, { _, dispatch }) => {
    dispatch(handleOnLoading()); //Bật loading
    console.log(dataLocal);
    const res = await quanLyPhimServ.getAllMovie();
    dispatch(handleOffLoading()); //Tắt loading
    return res.data.content;
  }
);

const phimSlice = createSlice({
  name: "quanLyPhim",
  initialState,
  reducers: {
    handleAllMovie: (state, action) => {
      console.log(action);
      state.arrMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovieThunk.fulfilled, (state, action) => {
      console.log(action);
      state.arrMovie = action.payload;
    });
  },
});

export const { handleAllMovie } = phimSlice.actions;

export default phimSlice.reducer;
