import { createSlice } from "@reduxjs/toolkit";
import {products} from '../Data.json';
const productsSlice = createSlice({
    name: "productsSlice",
    initialState: {
        products: products
    },
    reducers: {

    }
});
export default productsSlice.reducer;