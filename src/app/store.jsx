import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../features/products/productsApi';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
