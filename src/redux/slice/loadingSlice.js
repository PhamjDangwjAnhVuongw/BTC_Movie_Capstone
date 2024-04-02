//Bật và tắt loading
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true, //Ban đầu tự động hiển thị loading, sau đó thêm giá trị false vào để tắt
  isCount: 0,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    handleOffLoading: (state, action) => {
      state.isCount -= 1;
      if (state.isCount == 0) {
        state.isLoading = false;
      }
    },
    handleOnLoading: (state, action) => {
      state.isLoading = true;
      if (!state.isLoading) {
        state.isLoading = true;
      }
      state.isCount += 1;
    },
  },
});

export const { handleOffLoading, handleOnLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
