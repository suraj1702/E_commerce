import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 

export const Fetctproductlist = createAsyncThunk(
    "product/fetchProductList",
    async (thunkapi) => {
        try {
            const responce  = await axios.get('https://fakestoreapi.com/products');
            return responce.data;
        } catch (error) {
            return thunkapi.rejectWithValue(error.responce.data)
        }
    }
);