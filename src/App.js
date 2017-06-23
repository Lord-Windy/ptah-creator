import React, {Component} from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import './css/App.css';
import Overview from './views/Home.js'
import MainNavigation from './components/MainNavigation.js'

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
                        <Route exact path = "/" render = { (props) => (
                            <Overview {...props} store={store} />
                        )}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}
