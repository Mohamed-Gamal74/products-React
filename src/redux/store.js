import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { counterSlice } from "./counterSlice";
import {authSlice } from './auth'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    addToCart: cartSlice.reducer,
    auth : authSlice.reducer
  },
});
