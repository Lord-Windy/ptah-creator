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

    render() {
        console.log(this);
        return (
            <div>
                <PrettyNode title="Hello"/>
                <PrettyNode/>
                <PrettyNode/>
            </div>
        );
    }
}