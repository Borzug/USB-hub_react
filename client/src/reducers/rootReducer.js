import { combineReducers } from 'redux';

import cards from './cardReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
    cards,
    error
});

export default rootReducer;