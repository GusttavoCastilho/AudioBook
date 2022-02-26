import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Reactotron from "../../reactotron";

import BookReducer from "./book/reducers";
import { rootSagas } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    book: BookReducer,
  },
  enhancers: [Reactotron.createEnhancer!()],
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export type RootState = ReturnType<typeof store.getState>;

export default store;
