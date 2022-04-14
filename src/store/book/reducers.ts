import { createSlice } from "@reduxjs/toolkit";

import { BooksState } from "./types";

const initialState: BooksState = {
  loading: false,
  error: null,
  books: [],
  category: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchRequestBook: (state: BooksState, _): void => {
      state.loading = true;
      state.error = null;
    },
    searchSuccessBook: (state: BooksState, { payload }): void => {
      state.loading = false;
      state.error = null;
      state.books = payload.books;
    },
    searchFailureBook: (state: BooksState, { payload }): void => {
      state.loading = false;
      state.error = payload;
    },
    getRequestCategory: (state: BooksState, _): void => {
      state.loading = true;
      state.error = null;
    },
    getSuccessCategory: (state: BooksState, { payload }): void => {
      state.loading = false;
      state.error = null;
      state.books = payload.books;
    },
    getFailureCategory: (state: BooksState, { payload }): void => {
      state.loading = false;
      state.error = payload;
    },
    resetBooks: (state: BooksState): void => {
      state.loading = false;
      state.error = "";
      state.books = [];
      state.category = "";
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
  resetBooks,
} = bookSlice.actions;

export default bookSlice.reducer;
