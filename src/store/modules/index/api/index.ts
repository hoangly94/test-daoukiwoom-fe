import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareHeaders } from './funcs';
import postLogin from './postLogin';
import postRegister from './postRegister';

export const indexApi = createApi({
  reducerPath: 'indexApi',
  tagTypes: ['index'],
  baseQuery: fetchBaseQuery({
    prepareHeaders,
    baseUrl: `${process.env.API_URL}/api/v1/`,
  }),

  endpoints: (builder) => ({
    postRegister: builder.mutation(postRegister),
    postLogin: builder.mutation(postLogin),
  }),
});

export const { usePostRegisterMutation,usePostLoginMutation } = indexApi;