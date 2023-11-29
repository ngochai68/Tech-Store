import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../constant/backend-domain';
import { ProductListResponse } from '../../types/product.type';

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getLatestProducts: build.query<ProductListResponse, number>({
      query: (count) => `/products/latest/${count}`,
      providesTags: (result) =>
        result?.data
          ? [...result.data.map(({ product_id }) => ({ type: 'Products' as const, id: product_id.toString() }))]
          : []
    })
    // Thêm các endpoints khác theo nhu cầu của bạn
  })
});

export const { useGetLatestProductsQuery } = clientApi;
