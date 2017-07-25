import React, {Component} from 'react'
import { Dropdown, Button, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import {loadState} from "../model/ActionsState.js"

var fileDownload = require('react-file-download');
let reader = new FileReader();

// TODO: Update <Search> usage after its will be implemented

export default class MainNavigation extends Component {
    constructor (props) {
        super(props)
        this.downloadState = this.downloadState.bind(this);
        this.uploadState = this.uploadState.bind(this);
        this.storeData = this.storeData.bind(this);
        this.redirectToInput = this.redirectToInput.bind(this);
    }

    downloadState() {
        //console.log(this);
        let state  = this.props.store.getState().Reducer;
        fileDownload(JSON.stringify(state), 'test.txt');
    }

    storeData() {
        let json = "";
        try {
            json = JSON.parse(reader.result);
        } catch(e) {
            console.log("Error in parsing file. Please ensure that it is the correct file");
            return;
        }

        if (json.Nodes === undefined || json.Characters === undefined){
            console.log("Incorrect JSON Object. This cannot be used with Hikuptah")
        }
        console.log(json);
        console.log(this.props);
        this.props.store.dispatch(loadState(json));
        console.log(this.props.store.getState());
        this.props.reRender();
    }

    redirectToInput() {
        let input = document.getElementById("input");
        input.click();
    }

    uploadState() {
        let file = document.getElementById('input').files[0];

        if (file.type !== "text/plain") {
            console.log("Incorrect File")
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
                <Menu attached='top'>
                        <Link to="/">
                        <Menu.Item>
                            <Icon name="home"/>
                            Home
                        </Menu.Item>
                    </Link>

                    <Menu.Item onClick = {this.downloadState}>
                        <Icon name="download"/>
                        Download
                    </Menu.Item>
                    <Menu.Item onClick = {this.redirectToInput}>
                        <input type="file" id="input" style={{display:'none'}} onChange={this.uploadState}/>
                        <Icon name="upload"/>
                        Upload
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