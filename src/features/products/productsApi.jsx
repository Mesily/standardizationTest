import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit = 10, skip = 0 }) => `products?limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
