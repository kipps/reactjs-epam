import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/store/configureStore';
import App from "./container/app.js";

import history from './history';

// Get the current location.
const location = history.location;


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)
