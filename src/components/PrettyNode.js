import React, {Component} from 'react'
import Draggable from 'react-draggable';
import { Button, Card } from 'semantic-ui-react'

// TODO: Replace card title, meta, description, with user generated content.

export default class PrettyNode extends Component {
    render() {
        return (
        <Draggable>
            <Card>
                <Card.Content>
                    <Card.Header>
                        Default Card
                    </Card.Header>
                    <Card.Meta>
                        Card ID or some other useful information, tags?
                    </Card.Meta>
                    <Card.Description>
                        This is a story all about how my life got flipped turned upside down.
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