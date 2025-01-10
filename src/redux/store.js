import React from "react";
import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./CartSlice.js";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true,
});
export default store;
