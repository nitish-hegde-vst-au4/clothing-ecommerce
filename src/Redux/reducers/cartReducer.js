import { actionTypes } from '../types';

const initialState = {
  hidden: true,
  cartItems: [],
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case actionTypes.ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    default:
      return state;
  }
};
