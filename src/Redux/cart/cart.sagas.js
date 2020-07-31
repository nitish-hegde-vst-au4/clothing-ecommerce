import { call, put, all, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../types';
import { clearCart } from './cartActions';

function* clearCartSaga() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearCartSaga);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
