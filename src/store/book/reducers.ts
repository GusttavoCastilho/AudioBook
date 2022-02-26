import { createSlice } from "@reduxjs/toolkit";

import { BooksState } from "./types";

const initialState: BooksState = {
  loading: false,
  error: null,
  search: {
    text: "",
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
  },
});

export const { searchRequestBook, searchSuccessBook, searchFailureBook } =
  bookSlice.actions;

export default bookSlice.reducer;
