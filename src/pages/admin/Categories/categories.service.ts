import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../../constant/backend-domain';
import {
  ICategory,
  CategoryCreateResponse,
  CategoryGetAllResponse,
  CategoryGetResponse,
  CategoryUpdateResponse,
  CategoryDeleteResponse
} from '../../../types/category.type';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes: ['Categories'],
  endpoints: (build) => ({
    getCategories: build.query<CategoryGetAllResponse, void>({
      query: () => `/admin/product-categories`,
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ category_id }) => ({ type: 'Categories' as const, id: category_id.toString() })),
              { type: 'Categories' as const, id: 'LIST' }
            ]
          : [{ type: 'Categories' as const, id: 'LIST' }]
    }),
    getCategoryById: build.query<CategoryGetResponse, number>({
      query: (categoryId) => `/admin/product-categories/${categoryId}`,
      providesTags: (_, __, categoryId) => [{ type: 'Categories', id: categoryId.toString() }]
    }),

    addCategory: build.mutation<CategoryCreateResponse, Partial<ICategory>>({
      query: (newCategory) => ({
        url: `/admin/product-categories`,
        method: 'POST',
        body: newCategory
      }),
      invalidatesTags: [{ type: 'Categories', id: 'LIST' }]
    }),
    updateCategory: build.mutation<CategoryUpdateResponse, Partial<ICategory>>({
      query: (category) => ({
        url: `/admin/product-categories/${category.category_id}`,
        method: 'PUT',
        body: category
      }),
      invalidatesTags: (_, __, category) => [{ type: 'Categories', id: category.category_id?.toString() }]
    }),
    deleteCategory: build.mutation<CategoryDeleteResponse, number>({
      query: (categoryId) => ({
        url: `/admin/product-categories/${categoryId}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Categories', id: 'LIST' }]
    })
  })
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery, useAddCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } =
  categoriesApi;
