import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getCards } from './actions/cardsActions';

import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './assets/fonts/PTS55F_stylesheet.css';
import './index.css';

const store = configureStore();
store.dispatch(getCards());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();