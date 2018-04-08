import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import rootReducer from './reducers';
import App from './containers/App';
/* global document */

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
