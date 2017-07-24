import React, {Component} from 'react'
import { Button, Icon, Menu, Modal, Input, Form, TextArea } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import NewNodeModal from './modals/NewNodeModal.js'

var fileDownload = require('react-file-download');
let reader = new FileReader();

// TODO: Update <Search> usage after its will be implemented

export default class MainNavigation extends Component {
    constructor (props) {
        super(props);
        this.downloadState = this.downloadState.bind(this);
        this.uploadState = this.uploadState.bind(this);
        this.storeData = this.storeData.bind(this);
    }

    biggerNodes () {}
    smallerNodes () {}

    downloadState() {
        //console.log(this);
        let state  = this.props.store.getState().Reducer;
        fileDownload(JSON.stringify(state), 'test.txt');
    }

    storeData() {
        console.log(this.props);
        console.log(reader.result);
        let json = "";
        try {
            json = JSON.parse(reader.result);
        } catch(e) {
            console.log("Error in parsing file. Please ensure that it is the correct file");
        }
    }

    uploadState() {
        let file = document.getElementById('input').files[0];

        if (file.type !== "text/plain") {
            console.log("Incorrect File");
            return;
        }

        console.log(JSON.stringify(file.type));

        reader.onload = this.storeData;

        reader.readAsText(file);
        //console.log(File.toString())
    }

    render() {
        return (
            <div>
                <Menu>
                    <Menu.Item onClick = {this.downloadState}>
                        <Icon name="download"/>
                        Import
                    </Menu.Item>

                    <Menu.Item>
                        <input type="file" id="input" onChange={this.uploadState}/>
                        <Icon name="upload"/>
                        Export
                    </Menu.Item>

                    <NewNodeModal/>

                    <Menu.Menu position='right'>
                        <Menu.Item onClick = {this.biggerNodes}><Icon name="plus"/></Menu.Item>
                        <Menu.Item onClick = {this.smallerNodes}><Icon name="minus"/></Menu.Item>
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