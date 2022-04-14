import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import api from "@services/api";

import {
  searchFailureBook,
  searchRequestBook,
  searchSuccessBook,
  getRequestCategory,
  getSuccessCategory,
  getFailureCategory,
} from "./reducers";

function* searchBooks({ payload }: ReturnType<typeof searchRequestBook>) {
  try {
    if (payload && payload.length > 0) {
      const { data }: AxiosResponse = yield call(
        api.get,
        `/books/v1/volumes?q=${payload}&key=AIzaSyCFVWZVioPcpoRewg61iGYM5pq-QyrdMmw`
      );

      if (data) {
        yield put(searchSuccessBook({ books: data.items }));
      }
    }
  } catch (error) {
    yield put(searchFailureBook({ error: error.message }));
  }
}

function* recommendedCategoryBooks({ payload }: ReturnType<typeof getRequestCategory>) {
  try {
    const { data }: AxiosResponse = yield call(
      api.get,
      `/books/v1/volumes?q=subject:${payload}&key=AIzaSyCFVWZVioPcpoRewg61iGYM5pq-QyrdMmw`
    );

    if (data) {
      yield put(getSuccessCategory({ books: data.items }));
    }
  } catch (error) {
    yield put(getFailureCategory({ error: error.message }));
  }
}

export default function* root() {
  yield takeLatest(searchRequestBook, searchBooks);
  yield takeLatest(getRequestCategory, recommendedCategoryBooks);
}
