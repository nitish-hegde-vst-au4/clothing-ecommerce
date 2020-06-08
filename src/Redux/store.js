import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
