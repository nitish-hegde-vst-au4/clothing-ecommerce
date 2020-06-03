import { combineReducers } from 'redux';
import { user } from './user/userReducer';
import { cart } from './cart/cartReducer';

const rootReducer = combineReducers({
  user,
  cart,
});

export default rootReducer;
