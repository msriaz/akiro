import * as storage from './storage'

export default function* rootSaga() {
  yield [
    storage.storeExpenseSaga(),
    storage.loadExpensesSaga(),
    storage.loadPayeesSaga(),
    storage.loadEnvelopesSaga(),
    storage.loadAccountsSaga(),
    storage.loadAllSaga()
  ]
}
