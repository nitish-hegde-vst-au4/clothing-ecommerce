import { combineReducers } from 'redux';
import { user } from './userReducer';
import { cart } from './cartReducer';

const rootReducer = combineReducers({
  user,
  cart,
});

export default rootReducer;
