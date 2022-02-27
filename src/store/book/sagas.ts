import { call, put, takeLatest, select } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import api from "@services/api";

import { RootState } from "..";

import {
  searchFailureBook,
  searchRequestBook,
  searchSuccessBook,
} from "./reducers";

function* searchBooks() {
  const { search } = yield select((state: RootState) => state.book);
  try {
    if (search.text.length > 0) {
      const { data }: AxiosResponse = yield call(
        api.get,
        `/books/v1/volumes?q=${search.text}`
      );

      if (data) {
        yield put(searchSuccessBook({ books: data.items }));
      }
    }
  } catch (error) {
    yield put(searchFailureBook({ error: error.message }));
  }
}

export default function* root() {
  yield takeLatest(searchRequestBook, searchBooks);
}
