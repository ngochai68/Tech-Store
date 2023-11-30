import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../constant/backend-domain';
import { IProduct } from '../../types/product.type';

interface ProductsGetLatestResponse {
  message: string;
  newProducts: IProduct[];
}

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes: ['Clients'],
  endpoints: (build) => ({
    getLatestProducts: build.query<ProductsGetLatestResponse, number>({
      query: (count) => `/products/latest/${count}`,
      providesTags: (result) =>
        result
          ? [...result.newProducts.map(({ product_id }) => ({ type: 'Clients' as const, id: product_id.toString() }))]
          : ['Clients']
    })
  })
});

export const { useGetLatestProductsQuery } = clientApi;
