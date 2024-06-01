import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  page: 0,
  hasMore: true,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products.push(...action.payload.products);
      state.page = action.payload.page;
      state.hasMore = action.payload.hasMore;
    },
    resetProducts: (state) => {
      state.products = [];
      state.page = 0;
      state.hasMore = true;
    },
  },
});

export const { addProducts, resetProducts } = productsSlice.actions;

export default productsSlice.reducer;
