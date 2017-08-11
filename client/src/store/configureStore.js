import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import cardReducer from '../reducers/cardReducer';


export default function configureStore(initialState) {
  return createStore (
    cardReducer,
    initialState,
    applyMiddleware(thunk)
  );
}