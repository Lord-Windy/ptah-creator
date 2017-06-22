import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './css/App.css';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import Home from './views/Home.js'
import Compose from './views/Compose.js'
import Overview from './views/Overview.js'
import MainNavigation from './views/MainNavigation.js'

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({router: routerReducer}),
    applyMiddleware(middleware)
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <MainNavigation/>
                        <Route exact path = "/" component = { Home } />
                        <Route path = "/compose" component = { Compose } />
                        <Route path = "/overview" component = { Overview } />
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}
