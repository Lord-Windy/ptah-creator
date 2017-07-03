import React, {Component} from 'react'
import { Dropdown, Button, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



// TODO: Update <Search> usage after its will be implemented

export default class MainNavigation extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Menu attached='top'>
                        <Link to="/">
                        <Menu.Item>
                            <Icon name="home"/>
                            Home
                        </Menu.Item>
                    </Link>

                    <Menu.Item>
                        <Icon name="download"/>
                        Import
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name="upload"/>
                        Export
                    </Menu.Item>

                    <Menu.Item onClick = {this.props.showNewNode}>
                        <Icon name="plus"/>
                        New Node
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <div className='ui right aligned category search item'>
                            <div className='ui transparent icon input'>
                                <input className='prompt' type='text' placeholder='Search nodes...'/>
                                <i className='search link icon'/>
                            </div>
                            <div className='results'>TODO</div>
                        </div>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}