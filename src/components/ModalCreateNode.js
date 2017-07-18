import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Popup, Button, Modal, Input, Form, TextArea } from 'semantic-ui-react';

export default class ModalCreateNode extends Component {
    static propTypes = {
        contentTitle: PropTypes.string,
        contentStory: PropTypes.string,
        contentTags: PropTypes.array
    };

    state = { open: false };
    show = (dimmer) => () => this.setState({ dimmer, open: true });
    close = () => this.setState({ open: false });

    render() {
        let {contentTitle, contentStory, contentTags} = this.props;

        const { open, dimmer } = this.state;
        return (
            <div>

                <Modal dimmer={this.props.show} open={this.props.show} onClose={this.props.showNewNode}>
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
                        <Button positive icon='checkmark' labelPosition='right' content="Save" onClick={this.close}/>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}