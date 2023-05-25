import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  status: "idle",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.products = [...action.payload.data];
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch(
    "https://orderly-w729.onrender.com/api/products-by-categories"
  );
  const data = await response.json();
  return data;
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
export const selectAllProducts = (state) => state.products;
