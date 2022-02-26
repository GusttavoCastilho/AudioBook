import { all } from 'redux-saga/effects'

import bookSagas from './book/sagas'

const sagasList = [
    bookSagas()
]

export const rootSagas = function* rootSagas(): Generator {
    return yield all(sagasList);
}