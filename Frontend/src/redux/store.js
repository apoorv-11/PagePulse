import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/Cart/cartSlice.js";
import bookApi from "./features/Books/BooksApi.js";
import orderApi from "./features/orders/OrderApi.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware, orderApi.middleware),
});
