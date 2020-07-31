import { actionTypes } from '../types';

export const googleSignIn = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignIn = (emailAndPassword) => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: actionTypes.CHECK_USER_SESSION,
});

export const signoutStart = () => ({
  type: actionTypes.SIGN_OUT_START,
});

export const signoutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS,
});

export const signoutFailure = (error) => ({
  type: actionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUp = (userCredentials) => ({
  type: actionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = (user, additionalData) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: error,
});
