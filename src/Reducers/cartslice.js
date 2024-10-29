import { createSlice } from "@reduxjs/toolkit";
import { FetctCartproductlist } from "../actions/Actions";

const cartslice  = createSlice({
    name: "cart",
    initialState : {
        cartlistdata : [],
        loading : false,
        error : null,
    },
    reducers :{},
    extraReducers: (builder) => {
        builder
          .addCase(FetctCartproductlist.pending, (state) => {
            state.loading = true;
          })
          .addCase(FetctCartproductlist.fulfilled, (state, action) => {
            state.loading = false;
            state.productList = action.payload; 
          })
          .addCase(FetctCartproductlist.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message; 
          });
      }
})

export default cartslice.reducer;