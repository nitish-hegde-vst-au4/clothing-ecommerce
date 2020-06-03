import { actionTypes } from '../types';

const initialState = {
  currentUser: null,
};
export const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
