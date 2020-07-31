import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actionTypes } from '../types';
import {
  signInSuccess,
  signInFailure,
  signoutSuccess,
  signoutFailure,
  signUpFailure,
  signUpSuccess,
} from './userActions';
import {
  auth,
  createProfileDocument,
  googleProvider,
  getCurrentUser,
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createProfileDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* emailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignIn() {
  yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, emailSignInAsync);
}

export function* isAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(actionTypes.CHECK_USER_SESSION, isAuthenticated);
}

export function* signout() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signoutFailure(error));
  }
}

export function* onSignout() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signout);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* onSignUp() {
  yield takeLatest(actionTypes.SIGN_UP_START, signUp);
}
export function* signUpAndSignIn({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}
export function* onSignUpAndSignIn() {
  yield takeLatest(actionTypes.SIGN_UP_SUCCESS, signUpAndSignIn);
}
export function* userSagas() {
  yield all([
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onCheckUserSession),
    call(onSignout),
    call(onSignUp),
    call(onSignUpAndSignIn),
  ]);
}
