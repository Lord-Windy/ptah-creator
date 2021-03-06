import React, {Component} from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './model/Reducer.js'
import addCharacter from './model/ActionsCharacter.js'
import {addNode} from "./model/ActionsNode.js"
import {createDefaultNode} from "./model/DefaultStates.js"

import createHistory from 'history/createBrowserHistory'
import './css/App.css';
import Overview from './views/Home.js'
import MainNavigation from './components/MainNavigation.js'

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({routerReducer, Reducer}),
    applyMiddleware(middleware)
);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.forceReRender = this.forceReRender.bind(this);
    }

    forceReRender() {
        console.log("forcing update")
        this.forceUpdate();
    }
    
    render() {
        store.dispatch(addNode(createDefaultNode()));
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <MainNavigation store={store} reRender={this.forceReRender}/>
                        <Route exact path = "/" render = { (props) => (
                            <Overview {...props} store={store} />
                        )}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}
