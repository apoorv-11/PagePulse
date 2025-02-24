import { createSlice } from "@reduxjs/toolkit";
//Alert
import Swal from "sweetalert2";

//Initial State :
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  //Reducer Action :
  reducers: {
    addToCart: (state, action) => {
      //Checking whether the item already in cart ?
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Added Successfully",
          showConfiguration: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Product already in Cart",
        });
      }
    },

    //Removing Products from Cart :
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },

    //Clearing the Cart :
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
