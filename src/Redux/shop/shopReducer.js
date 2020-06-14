import { actionTypes } from '../types';

const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COLLECTION:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
