import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        // add more states
    },
    reducers: {
        // place for functions
        getAllProducts: (state, action) => {
            // console.log(action);

            state.allProducts = action.payload
            // console.log(state.allProducts);
        }
    }
})

export const { getAllProducts } = productsSlice.actions
export default productsSlice.reducer