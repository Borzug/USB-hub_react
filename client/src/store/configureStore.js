import { createStore, applyMiddleware } from 'redux';
import cardReducer from '../reducers/cardReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore (
    cardReducer,
    initialState,
    applyMiddleware(thunk)
  );
}