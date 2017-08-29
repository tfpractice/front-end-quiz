import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as MUI from 'material-ui/colors';
import { theme } from '../../utils';
import { getStore } from '../../imports';

const store = getStore(window.__PRELOADED_STATE__);
const rootElem = document.getElementById('root');

console.log('store', store);
const Home = (props) => {
  console.log('props', props);

  return <h1> I am the home page</h1>;
};

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
