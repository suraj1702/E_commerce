import { configureStore } from "@reduxjs/toolkit";
import ListSlice from '../Reducers/Listslice'

export const store = configureStore({
    reducer : {
        product : ListSlice
    }
})