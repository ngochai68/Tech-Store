import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_URL } from '../constant/backend-domain';

interface RegisterResponse {
  message: string;
  userId: number;
}

interface LoginResponse {
  message: string;
  token: string;
  userId: number;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers) => {
      // Lấy token từ localStorage
      const token = localStorage.getItem('token');

      // Nếu token tồn tại, thêm nó vào headers
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    }
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, { username: string; email: string; password: string }>({
      query: (credentials) => ({
        url: 'auth/register',
        method: 'POST',
        body: credentials
      }),
      invalidatesTags: ['Auth']
    }),
    loginUser: builder.mutation<LoginResponse, { email: string; password: string }>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials
      }),
      invalidatesTags: ['Auth']
    })
  })
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
