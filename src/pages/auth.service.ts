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
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
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
