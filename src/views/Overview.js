import React, {Component} from 'react';
import PrettyNode from './PrettyNode.js'

/**
 * This is a view, specifically one that renders the default screen
 */

export default class Overview extends Component {

    render() {
        console.log(this);
        return (
            <div>
                <PrettyNode/>
            </div>

        );
    }
}