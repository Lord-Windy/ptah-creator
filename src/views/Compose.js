import React, {Component} from 'react';
import ModalCreateNode from '../components/ModalCreateNode.js'

/**
 * This is a view, specifically one that renders the default screen
 */

export default class Compose extends Component {
    render() {
        console.log(this)
        return (
            <div>
                <ModalCreateNode/>
            </div>

        );
    }
}