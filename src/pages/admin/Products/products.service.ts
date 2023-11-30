import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../../constant/backend-domain';
import { IProduct } from '../../../types/product.type';

interface ProductGetAllResponse {
  message: string;
  products: IProduct[];
}

interface ProductGetLatestResponse {
  message: string;
  products: IProduct[];
}

interface ProductGetByIdResponse {
  message: string;
  product: IProduct;
}

interface ProductCreateResponse {
  message: string;
  productId: number;
}

interface ProductUpdateResponse {
  message: string;
}

interface ProductDeleteResponse {
  message: string;
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
    }),
    getLatestProducts: builder.query<ProductGetLatestResponse, number>({
      query: (limit) => `/admin/products/latest/${limit}`,
      providesTags: [{ type: 'Products', id: 'LIST' }]
    }),
    getProductById: builder.query<ProductGetByIdResponse, number>({
      query: (id) => `/admin/products/${id}`,
      providesTags: (_, __, id) => [{ type: 'Products', id: id.toString() }]
    }),
    createProduct: builder.mutation<ProductCreateResponse, Partial<IProduct>>({
      query: (product) => ({
        url: '/admin/products',
        method: 'POST',
        body: product
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    }),
    updateProduct: builder.mutation<ProductUpdateResponse, Partial<IProduct> & { product_id: number }>({
      query: ({ product_id, ...product }) => ({
        url: `/admin/products/${product_id}`,
        method: 'PUT',
        body: product
      }),
      invalidatesTags: (_, __, { product_id }) => [{ type: 'Products', id: product_id.toString() }]
    }),
    deleteProduct: builder.mutation<ProductDeleteResponse, number>({
      query: (productId) => ({
        url: `/admin/products/${productId}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    })
  })
});

export const {
  useGetAllProductsQuery,
  useGetLatestProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productsApi;
