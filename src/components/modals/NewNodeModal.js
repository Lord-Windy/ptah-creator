/**
 * Created by Stangahh on 24/07/2017.
 */
import React, {Component} from "react";
import {Button, Form, Icon, Input, Menu, Modal, TextArea} from "semantic-ui-react";

export default class NewNodeModal extends Component {

    newNode () {}

    render() {
        return (
            <div>
                <Modal
                    trigger={
                        <Menu.Item>
                            <Icon name="sticky note"/>
                            New Node
                        </Menu.Item>
                    }
                    closeIcon='close'>
                    <Modal.Header>Add A New Node</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        control={Input}
                                        label='Title'
                                        placeholder='Enter the title for this card here...'
                                        content="contentTitle"
                                    />
                                    <Form.Field>
                                        <label>Tags</label>
                                        <Input
                                            icon='tags'
                                            iconPosition='left'
                                            placeholder='Enter tags'
                                            content="contentTags"
                                        />
                                    </Form.Field>
                                </Form.Group>
                                <Form.Field id='form-textarea-control-opinion'
                                            control={TextArea}
                                            label='Story'
                                            placeholder='Write your story dialog here...'
                                            content="contentStory"
                                />
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button positive icon='checkmark' labelPosition='right' content="Save" onClick={this.newNode}/>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}