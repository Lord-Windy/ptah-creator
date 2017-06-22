import React, {Component} from 'react';
import PrettyNode from '../components/PrettyNode.js'

/**
 * This is a view, specifically one that renders the default screen
 */

export default class Overview extends Component {

    render() {
        console.log(this);
        return (
            <div>
                <PrettyNode/>
                <PrettyNode/>
                <PrettyNode/>
            </div>

        );
    }
}