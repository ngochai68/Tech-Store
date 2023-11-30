import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../../constant/backend-domain';
import { IProduct } from '../../../types/product.type';

interface ProductGetAllResponse {
  message: string;
  products: IProduct[];
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes: ['Products'], 
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductGetAllResponse, void>({
      query: () => '/admin/products',
      providesTags: (result) =>
        result
          ? [
              ...result.products.map(({ product_id }) => ({
                type: 'Products' as const,
                id: product_id.toString()
              })),
              { type: 'Products' as const, id: 'LIST' }
            ]
          : [{ type: 'Products' as const, id: 'LIST' }]
    })
  })
});

export const { useGetAllProductsQuery } = productsApi;
