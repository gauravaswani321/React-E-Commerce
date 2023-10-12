import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toFilterProducts:[],
    sortValue:'',
    searchValue:'',
    filters:{
        category:'all',
        colors:'all',
        company:'all',
        price:0,
        minprice:0,
        maxprice:0,
    },
};

const productFilterSlice = createSlice({
    name:'productFilter',
    initialState,
    reducers: {
        updateProducts(state, action){
            state.toFilterProducts = action.payload;
        },
        sortValue(state, action){
            let selectSortData = state.toFilterProducts;
            state.sortValue = action.payload;

            const sortProducts = (a, b) => {
                if(state.sortValue === 'lowest'){
                    return a.price - b.price;
                }
                else if(state.sortValue === 'highest'){
                    return b.price - a.price;
                }
                else if(state.sortValue === 'a-z'){
                    return a.name.localeCompare(b.name);
                }
                else if(state.sortValue === 'z-a'){
                    return b.name.localeCompare(a.name);
                }
                else{
                    return selectSortData;
                }
            }

            state.toFilterProducts = selectSortData.sort(sortProducts);
        },
        searchSort(state, action){
            state.searchValue = action.payload;
            let searchSort = [...state.toFilterProducts];
            searchSort = searchSort.filter((product) => (
                product.name.toLowerCase().includes(state.searchValue)
            ));
            state.toFilterProducts = searchSort;
        },
        productCategoryFilter(state, action){
            let tempFilterProduct = [...state.toFilterProducts];
            state.filters.category = action.payload;
            if(state.filters.category !== 'all'){
                tempFilterProduct = tempFilterProduct.filter((product) => (
                    product.category === state.filters.category
                    ));
                }
            state.toFilterProducts = tempFilterProduct;
        },
        productColorFilter(state, action){
            let tempFilterProduct = [...state.toFilterProducts];
            state.filters.colors = action.payload;
            if(state.filters.colors !== 'all'){
                tempFilterProduct = tempFilterProduct.filter((product) => (
                    product.colors.includes(state.filters.colors)
                ))
            };    
            state.toFilterProducts = tempFilterProduct;
        },
        productCompanyFilter(state, action){
            let tempFilterProduct = [...state.toFilterProducts];
            state.filters.company = action.payload;
            if(state.filters.company !== 'all'){
                tempFilterProduct = tempFilterProduct.filter((product) => (
                    product.company === state.filters.company
                ))
            };    
            state.toFilterProducts = tempFilterProduct;
        },
        productPriceFilter(state, action){
            let tempFilterProduct = [...state.toFilterProducts];
            state.filters.price = action.payload;

            if(state.filters.price == 0){
                tempFilterProduct = tempFilterProduct.map((product) => (
                    product
                ))
            }else{
                tempFilterProduct = tempFilterProduct.filter((product) => (
                    product.price <= state.filters.price
                ))
            }
            state.toFilterProducts = tempFilterProduct;
        },
        clearProductFilter(state){
            return {...state,
                sortValue:'',
                searchValue:'',
                filters: {
                    category:'all',
                    colors:'all',
                    company:'all',
                    price:0,
                }, 
            }   
        },
    },
});

export const { updateProducts, sortValue, searchSort, productCategoryFilter, productColorFilter, productCompanyFilter, productPriceFilter, clearProductFilter } = productFilterSlice.actions; 
export default productFilterSlice.reducer;