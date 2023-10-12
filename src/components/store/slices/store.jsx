import { configureStore } from "@reduxjs/toolkit";
import productApiSlice from "./productApiSlice";
import productFilterSlice from "./productFilterSlice";

const store = configureStore({
    reducer:{
        products: productApiSlice,
        productFilter:productFilterSlice,
    },
});

export default store;