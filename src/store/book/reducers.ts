import { createSlice } from "@reduxjs/toolkit";

import { BooksState } from "./types";

const initialState: BooksState = {
  loading: false,
  error: null,
  search: {
    text: "",
    category: "",
    books: [],
  },
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchRequestBook: (state: BooksState, { payload }): void => {
      state.loading = true;
      state.search.text = payload;
      state.error = null;
    },
    searchSuccessBook: (state: BooksState, { payload }): void => {
      state.loading = false;
      state.error = null;
      state.search.books = payload.books;
    },
    searchFailureBook: (state: BooksState, { payload }): void => {
      state.loading = false;
      state.error = payload;
    },
    getRequestCategory: (state: BooksState, { payload }): void => {
      state.loading = true;
      state.search.category = payload;
      state.error = null;
    },
    getSuccessCategory: (state: BooksState, { payload }): void => {
      state.loading = false;
      state.error = null;
      state.search.books = payload.books;
    },
    getFailureCategory: (state: BooksState, { payload }): void => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  searchRequestBook,
  searchSuccessBook,
  searchFailureBook,
  getRequestCategory,
  getSuccessCategory,
  getFailureCategory,
} = bookSlice.actions;

export default bookSlice.reducer;
