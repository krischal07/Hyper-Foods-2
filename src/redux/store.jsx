import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true,
});
export default store;
