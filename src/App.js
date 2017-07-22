import React, {Component} from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ModalCreateNode from './components/ModalCreateNode.js'
import { Provider } from 'react-redux'
import Reducer from './model/Reducer.js'
import addCharacter from './model/ActionsCharacter.js'
import {addNode, editNode} from "./model/ActionsNode.js"
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

        this.state = {
            showNewNode: false
        };

        this.handleShowModalCreaation = this.handleShowModalCreaation.bind(this);
    }

    handleShowModalCreaation(){
        let show = !this.state.showNewNode;
        this.setState ({
            showNewNode: show
        })
    }

    render() {
        store.dispatch(addNode(createDefaultNode()));
        store.dispatch(addNode(createDefaultNode()));
        store.dispatch(editNode({ID: 0, Title: "First", Description: "Hello!"}));
        store.dispatch(editNode({ID: 1, Title: "Second", Description: "Woot!", X: 100, Y:100}));
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <MainNavigation showNewNode = {this.handleShowModalCreaation} />
                        <ModalCreateNode show = {this.state.showNewNode} showNewNode = {this.handleShowModalCreaation} />
                        <Route exact path = "/" render = { (props) => (
                            <Overview {...props} store={store} />
                        )}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}
