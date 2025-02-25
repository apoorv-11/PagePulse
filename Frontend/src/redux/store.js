import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/Cart/cartSlice.js";
import bookApi from "./features/Books/BooksApi.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(bookApi.middleware);
  },
});
