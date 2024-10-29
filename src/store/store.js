import { configureStore } from "@reduxjs/toolkit";
import ListSlice from '../Reducers/Listslice';
import cartslice from '../Reducers/cartslice'

export const store = configureStore({
    reducer : {
        product : ListSlice,
        cartdata : cartslice

    }
})