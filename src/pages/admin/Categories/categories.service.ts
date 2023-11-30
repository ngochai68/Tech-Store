import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../../constant/backend-domain';
import { ICategory } from '../../../types/category.type';

interface CategoryCreateResponse {
  message: string;
  categoryId: number;
}

interface CategoryGetAllResponse {
  message: string;
  categories: ICategory[];
}

interface CategoryGetByIdResponse {
  message: string;
  category: ICategory;
}

interface CategoryUpdateResponse {
  message: string;
}

interface CategoryDeleteResponse {
  message: string;
}

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes: ['Categories'],
  endpoints: (build) => ({
    getCategories: build.query<CategoryGetAllResponse, void>({
      query: () => `/admin/product-categories`,
      providesTags: (result) =>
        result
          ? [
              ...result.categories.map(({ category_id }) => ({
                type: 'Categories' as const,
                id: category_id.toString()
              })),
              { type: 'Categories' as const, id: 'LIST' }
            ]
          : [{ type: 'Categories' as const, id: 'LIST' }]
    }),
    getCategoryById: build.query<CategoryGetByIdResponse, number>({
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
    updateCategory: build.mutation<CategoryUpdateResponse, Partial<ICategory> & { category_id: number }>({
      query: ({ category_id, ...category }) => ({
        url: `/admin/product-categories/${category_id}`,
        method: 'PUT',
        body: category
      }),
      invalidatesTags: (_, __, { category_id }) => [{ type: 'Categories', id: category_id.toString() }]
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

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = categoriesApi;
