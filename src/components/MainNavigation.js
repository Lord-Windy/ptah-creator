import React, {Component} from 'react'
import { Button, Icon, Menu, Modal, Input, Form, TextArea } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
        let {contentTitle, contentStory, contentTags} = this.props;

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

                    <Modal
                        trigger={
                            <Menu.Item>
                                <Icon name="plus"/>
                                New Node
                            </Menu.Item>
                        }>
                        <Modal.Header>Add A New Node</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Form>
                                    <Form.Group widths='equal'>
                                        <Form.Field
                                            control={Input}
                                            label='Title'
                                            placeholder='Enter the title for this card here...'
                                            content={contentTitle}
                                        />
                                        <Form.Field>
                                            <label>Tags</label>
                                            <Input
                                                icon='tags'
                                                iconPosition='left'
                                                placeholder='Enter tags'
                                                content={contentTags}
                                            />
                                        </Form.Field>
                                    </Form.Group>
                                    <Form.Field id='form-textarea-control-opinion'
                                                control={TextArea}
                                                label='Story'
                                                placeholder='Write your story dialog here...'
                                                content={contentStory}
                                    />
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={this.close} content="Close"/>
                            <Button positive icon='checkmark' labelPosition='right' content="Save" onClick={this.newNode}/>
                        </Modal.Actions>
                    </Modal>

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