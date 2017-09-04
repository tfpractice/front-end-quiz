import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter, Route } from 'react-router-dom';

import { theme } from '../../utils';
import { getStore } from '../../imports';
import { Products } from '../../imports/store';
import Home from '../components';

const store = getStore(window.__PRELOADED_STATE__);
const rootElem = document.getElementById('root');

store.dispatch(Products.actions.getProducts({ start: 0, limit: 8 }));

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route component={Home} />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  rootElem
);
