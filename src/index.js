import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import rootReducer from './reducers';
import App from './containers/App';
/* global document */

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);
const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
