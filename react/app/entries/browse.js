import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { getStore } from '../../imports';

const store = getStore(window.__PRELOADED_STATE__);
const rootElem = document.getElementById('root');
console.log('store', store);
const Home = props => {
    console.log('props', props);

    return <h1> I am the home page</h1>;
};
render(
    <Provider store={store}>
        {/* <MuiThemeProvider theme={theme}> */}
        <BrowserRouter>
            <Route component={Home} />
        </BrowserRouter>
        {/* </MuiThemeProvider> */}
    </Provider>,
    rootElem,
);
