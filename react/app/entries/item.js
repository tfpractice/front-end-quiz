import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import { theme } from '../../utils';
import { getStore } from '../../imports';
import { Products } from '../../imports/store';
import Item from '../components/itemRoute';
import Home from '../components';

const store = getStore(window.__PRELOADED_STATE__);

store.dispatch(Products.actions.addProducts(window.ITEM));

const rootElem = document.getElementById('root');

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
