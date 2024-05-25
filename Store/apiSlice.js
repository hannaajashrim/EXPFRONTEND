import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseURL = "http://localhost:4000";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getcategories: builder.query({
      query: () => "/getcat",
      providesTags: ["categories"],
    }),

    getLabels: builder.query({
      query: () => `/labels`,
      providesTags: ["transactions"],
    }),

    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: "/createlist",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),

    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: `/deleteitem`,
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;
