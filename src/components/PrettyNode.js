import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Draggable from 'react-draggable';
import { Button, Card } from 'semantic-ui-react'

// TODO: Replace card title, meta, description, with user generated content.

export default class PrettyNode extends Component {
    static propTypes = {
        title: PropTypes.string,
        body: PropTypes.string,
        id: PropTypes.number
    }

    render() {
        let {title, body, id} = this.props

        return (
        <Draggable>
            <Card>
                <Card.Content>
                    <Card.Header>
                        {title}
                    </Card.Header>
                    <Card.Meta>
                        <span className="date">
                            Node's "id" is {id}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {body}
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