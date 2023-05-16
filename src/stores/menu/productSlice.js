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
});
