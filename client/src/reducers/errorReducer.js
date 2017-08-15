import initialState from '../store/initialState';

export default function error(state = initialState.error, action) {
  switch(action.type) {
    case 'GET_CARDS_ERROR':    
      return action.error;
    default:
      return state;
  }
}