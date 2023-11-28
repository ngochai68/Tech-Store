import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../../../constant/backend-domain';
import { ICategory } from '../../../types/category.type';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes: ['Categories'],
  endpoints: (build) => ({
    getCategories: build.query<ICategory[], void>({
      query: () => `/admin/product-categories`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ category_id }) => ({ type: 'Categories' as const, id: category_id })),
              { type: 'Categories' as const, id: 'LIST' }
            ]
          : [{ type: 'Categories' as const, id: 'LIST' }]
    })
    // Thêm các endpoints khác nếu cần
  })
});

export const { useGetCategoriesQuery } = categoriesApi;
