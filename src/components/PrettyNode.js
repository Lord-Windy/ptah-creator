import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

// TODO: Replace card title, meta, description, with user generated content.

export default class PrettyNode extends Component {
    render() {
        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Card Title
                        </Card.Header>
                        <Card.Meta>
                            Maybe there could be cool info here.
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
            </Card.Group>
        )
    }
}