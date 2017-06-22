import React, { Component } from 'react';
import { Popup, Button, Modal, Input, Form, TextArea } from 'semantic-ui-react';

export default class ModalCreateNode extends Component {
    state = { open: false }
    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, dimmer } = this.state

        return (
            <div>
                <Button onClick={this.show('blurring')}>Make navigation 'New Node' do this</Button>

                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Add a New Node</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        control={Input}
                                        label='Title'
                                        placeholder='Enter the title for this card here...'
                                    />
                                    <Form.Field>
                                        <label>Tags</label>
                                        <Input
                                            icon='tags'
                                            iconPosition='left'
                                            label={{ tag: true, content: 'Add Tag' }}
                                            labelPosition='right'
                                            placeholder='Enter tags'
                                        />
                                    </Form.Field>
                                </Form.Group>
                                <Form.Field id='form-textarea-control-opinion'
                                            control={TextArea}
                                            label='Story'
                                            placeholder='Write your story dialog here...'
                                />
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>Close</Button>
                        <Button positive icon='checkmark' labelPosition='right'
                                content="Save" onClick={this.close} />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}