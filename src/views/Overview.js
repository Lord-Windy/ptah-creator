import React, {Component} from 'react';

import PropTypes from 'prop-types'
import { Router } from 'react-router'

/**
 * This is a view, specifically one that renders the default screen
 */

export default class Overview extends Component {

    render() {
        console.log(this);
        return (
            <div>
                I am the Overview
            </div>

        );
    }
}