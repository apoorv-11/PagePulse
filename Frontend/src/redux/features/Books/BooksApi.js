import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import getBaseUrl from "../../../utilis/baseUrl.js";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/books`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery,
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    //Get All Books :
    fetchAllBooks: builder.query({
      query: () => "/",
      providesTags: ["Books"],
    }),

    //get Single Book :
    fetchBookById: builder.query({
      query: (id) => `/get-book/${id}`,
      providesTags: ["Books"],
    }),

    //Create Book :
    AddBook: builder.mutation({
      query: (newBook) => ({
        url: `/create-book`,
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),

    //Update Book :
    UpdateBook: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `/update-book/${_id}`,
        method: "PUT",
        body: rest,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Books"],
    }),

    //Delete Book :
    DeleteBook: builder.mutation({
      query: (id) => ({
        url: `/delete-book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useFetchAllBooksQuery,
  useFetchBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
export default bookApi;
