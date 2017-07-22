import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Draggable from 'react-draggable';
import { Button, Card } from 'semantic-ui-react'

// TODO: Replace card title, meta, description, with user generated content.

export default class PrettyNode extends Component {

    render() {
        console.log(this.props)

        return (
        <Draggable
            defaultPosition={{x: this.props.Node.X, y: this.props.Node.Y}}>
            <Card>
                <Card.Content>
                    <Card.Header>
                        {this.props.Node.Title}
                    </Card.Header>
                    <Card.Meta>
                        <span className="date">
                            Node's "id" is {this.props.Node.ID}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {this.props.Node.Description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='blue'>Edit</Button>
                        <Button basic color='green'>Add Child</Button>
                    </div>
                </Card.Content>
            </Card>
        </Draggable>
        )
    }
}