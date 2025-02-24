import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/Cart/cartSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
