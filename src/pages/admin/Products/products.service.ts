import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../../constant/backend-domain';
import { ProductListResponse } from '../../../types/product.type';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: build.query<ProductListResponse, void>({
      query: () => `/admin/products`,
      providesTags: (result) =>
        result?.data
          ? [...result.data.map(({ product_id }) => ({ type: 'Products' as const, id: product_id.toString() }))]
          : []
    })
  })
});

export const { useGetProductsQuery } = productsApi;
