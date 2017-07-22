import React, {Component} from 'react';

import PrettyNode from '../components/PrettyNode.js'
import ModalCreateNode from '../components/ModalCreateNode.js'

/**
 * This is a view, specifically one that renders the default screen
 */

export default class Overview extends Component {

    constructor(props) {
        super(props);
    }

    renderIndividualNode(node) {
        return (
            <PrettyNode Node={node}/>
        )
    }

    renderNodes() {
        let components = [];
        let state = this.props.store.getState().Reducer;
        //console.log(state);
        for (let i = 0; i < state.Nodes.length; i++){
            components.push(this.renderIndividualNode(state.Nodes[i]));
        }

        return components;
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                {this.renderNodes()}
            </div>
        );
    }
}