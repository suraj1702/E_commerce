import { createSlice } from "@reduxjs/toolkit";
import { Fetctproductlist } from "../actions/Actions";

const ListSlice = createSlice({
  name: 'List',
  initialState: {
    productList: [], 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Fetctproductlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(Fetctproductlist.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload; 
      })
      .addCase(Fetctproductlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      });
  }
});

export default ListSlice.reducer;
