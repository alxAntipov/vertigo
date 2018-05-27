import './main.css'
import './normalize.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, Route} from 'react-router';
import {browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import reducers from 'reducers';
import Layout from 'containers/layout';
import Comics from 'containers/comics';
import ComicsBook from 'containers/comicsBook';
import Basket from 'containers/basket';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Comics} />
                <Route path='comics/:id' component={ComicsBook} />
                <Route path='categories/:id' component={Comics} />
            </Route>
            <Route path='/basket' component={Basket} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
