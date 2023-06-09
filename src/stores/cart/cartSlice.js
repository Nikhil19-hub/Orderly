import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTOCart: (state, action) => {
      console.log("abcd" + state.products);
      return {
        products: [...state.products, { ...action.payload, amount: 1 }],
      };
    },
    clearCart: (state) => {
      return { products: [] };
    },
    incrementProductAmount: (state, action) => {
      console.log("state", state);
      console.log("action", action);
      return {
        // products: [
        //   state.products.map((product) =>
        //     product.id === action.payload.id
        //       ? { ...product, amount: product.amount + 1 }
        //       : product
        //   ),

        products: [
          ...state.products.map((product) =>
            product._id === action.payload._id
              ? { ...product, amount: product.amount + 1 }
              : product
          ),
        ],
      };
    },
    decrementProductAmount: (state, action) => {
      return {
        products: [
          ...state.products.map((product) =>
            product._id === action.payload._id
              ? { ...product, amount: product.amount - 1 }
              : product
          ),
        ],
      };
    },
  },
});

export const cartProducts = (state) => state.cart.products;

export const {
  addTOCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
