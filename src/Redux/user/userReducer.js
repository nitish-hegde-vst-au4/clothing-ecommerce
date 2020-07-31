import { actionTypes } from '../types';

const initialState = {
  currentUser: null,
  error: null,
};
export const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, error: null };
    case actionTypes.SIGN_OUT_SUCCESS:
      return { ...state, error: null, currentUser: null };
    case actionTypes.SIGN_IN_FAILURE:
    case actionTypes.SIGN_OUT_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};
