import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async(url) => {
        const response = await axios.get(url);
        const products = await response.data;
        return products;
    }
);

const singleFetchProduct = createAsyncThunk(
    'products/singleProduct',
    async(url) => {
        const response = await axios.get(url);
        const data = await response.data;
        return data;
    }
);

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featuredproducts:[],
    singleProduct:{},
}

const productApiSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.featuredproducts = action.payload.filter((featuredproduct) => (
                featuredproduct.featured === true
            ));                      
        })
        .addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
        .addCase(singleFetchProduct.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(singleFetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.singleProduct = action.payload;
        })
        .addCase(singleFetchProduct.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
    },
}) 

export { fetchProducts, singleFetchProduct };
export default productApiSlice.reducer;