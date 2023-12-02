import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../../constant/backend-domain';
import { IProduct } from '../../../types/product.type';
import { categoriesApi } from '../Categories/categories.service';

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
    createProduct: builder.mutation<ProductCreateResponse, FormData>({
      query: (formData) => ({
        url: '/admin/products',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(categoriesApi.util.invalidateTags([{ type: 'Categories', id: 'LIST' }]));
        } catch (error) {
          console.error('Lỗi khi cập nhật lại category', error);
        }
      }
    }),
    updateProduct: builder.mutation<ProductUpdateResponse, { formData: FormData; product_id: number }>({
      query: ({ formData, product_id }) => ({
        url: `/admin/products/${product_id}`,
        method: 'PUT',
        body: formData
      }),
      invalidatesTags: (_, __, { product_id }) => [{ type: 'Products', id: product_id.toString() }],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(categoriesApi.util.invalidateTags([{ type: 'Categories', id: 'LIST' }]));
        } catch (error) {
          console.error('Lỗi khi cập nhật lại category', error);
        }
      }
    }),
    deleteProduct: builder.mutation<ProductDeleteResponse, number>({
      query: (productId) => ({
        url: `/admin/products/${productId}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(categoriesApi.util.invalidateTags([{ type: 'Categories', id: 'LIST' }]));
        } catch (error) {
          console.error('Lỗi khi cập nhật lại category', error);
        }
      }
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
