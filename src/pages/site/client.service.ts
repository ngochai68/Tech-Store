import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../constant/backend-domain';
import { IProduct } from '../../types/product.type';

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getLatestProducts: build.query<IProduct[], number>({
      query: (count) => `/products/latest/${count}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ product_id }) => ({ type: 'Products' as const, id: product_id })),
              { type: 'Products' as const, id: 'LIST' }
            ]
          : [{ type: 'Products' as const, id: 'LIST' }]
    })
    // Thêm các endpoints khác theo nhu cầu của bạn
  })
});

export const { useGetLatestProductsQuery } = clientApi;
