import { actionTypes } from '../types';

const initialState = {
  hidden: true,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
