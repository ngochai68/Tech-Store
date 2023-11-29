import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../../constant/backend-domain';
import {
  ICategory,
  CategoryCreateResponse,
  CategoryListResponse,
  CategoryUpdateResponse,
  CategoryDeleteResponse
} from '../../../types/category.type';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes: ['Categories'],
  endpoints: (build) => ({
    getCategories: build.query<CategoryListResponse, void>({
      query: () => `/admin/product-categories`,
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ category_id }) => ({ type: 'Categories' as const, id: category_id.toString() })),
              { type: 'Categories' as const, id: 'LIST' }
            ]
          : [{ type: 'Categories' as const, id: 'LIST' }]
    }),

    addCategory: build.mutation<CategoryCreateResponse, Partial<ICategory>>({
      query: (newCategory) => ({
        url: `/admin/product-categories`,
        method: 'POST',
        body: newCategory
      }),
      invalidatesTags: [{ type: 'Categories', id: 'LIST' }]
    }),
    updateCategory: build.mutation<CategoryUpdateResponse, ICategory>({
      query: (category) => ({
        url: `/admin/product-categories/${category.category_id}`,
        method: 'PUT',
        body: category
      }),
      invalidatesTags: [{ type: 'Categories', id: 'LIST' }]
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

export const { useGetCategoriesQuery, useAddCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } =
  categoriesApi;
