import { configureStore } from "@reduxjs/toolkit";
import phimSlice from "./slice/phimSlice";
import loadingSlice from "./slice/loadingSlice";

export const store = configureStore({
  reducer: {
    phimSlice,
    loadingSlice,
    // hoTen: () => {
    //   return "Cybersoft";
    // },
  },
});
