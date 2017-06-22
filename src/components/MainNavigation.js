import React, {Component} from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// TODO: Update <Search> usage after its will be implemented

export default class MainNavigation extends Component {
    render() {
        return (
            <div>
                <Menu attached='top'>
                    <Dropdown item icon='wrench' simple>
                        <Dropdown.Menu>
                            <Link to="/" className="nav-item"><Dropdown.Item>Home View</Dropdown.Item></Link>
                            <Link to="/compose" className="nav-item"><Dropdown.Item>Compose View</Dropdown.Item></Link>
                            <Link to="/overview" className="nav-item"><Dropdown.Item>Overview</Dropdown.Item></Link>
                            <Dropdown.Item>New Node</Dropdown.Item>
                            <Dropdown.Item>Export to JSON</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

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