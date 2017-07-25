import React, {Component} from 'react'
import Draggable from 'react-draggable';
import { Button, Card } from 'semantic-ui-react'

// TODO: Replace card title, meta, description, with user generated content.

export default class PrettyNode extends Component {
    editNode (node) {
        //open modal with this nodes prefilled information
    }

    addNodeChild (node) {
        //open modal with parent node predetermined
    }

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
                        <span className="nodeID">
                            Node's "id" is {this.props.Node.ID}
                        </span>
                    </Card.Meta>
                    <Card.Meta>
                        <span className="nodeCoords">
                            X: {this.props.Node.X} Y: {this.props.Node.Y}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {this.props.Node.Description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='blue' onClick={this.editNode(this.props.Node)}>Edit</Button>
                        <Button basic color='green' onClick={this.addNodeChild(this.props.Node)}>Add Child</Button>
                    </div>
                </Card.Content>
            </Card>
        </Draggable>
        )
    }
}