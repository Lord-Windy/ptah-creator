import {assignID} from './Reducer.js'

export const ADD_NODE = "ADD_NODE";
export const REMOVE_NODE = "REMOVE_NODE";
export const EDIT_NODE = "EDIT_NODE";

export function addNode(node) {
    console.log("Got here!");
    return {
        type: ADD_NODE,
        Node: node
    };
}

export function reducerAddNode(state, action) {
    action.Node.ID = assignID(state);
    state.Nodes.push(action.Node);
    return state;
}

export function editNode(toChange){
    return {
        type: EDIT_NODE,
        Node: toChange
    };
}

export function reducerEditNode(state, action) {
    let position = -1;
    for (let i = 0; i < state.Nodes.length; i++) {
        if (action.Node.ID === state.Nodes[i].ID){
            position = i;
            break;
        }
    }
    //could not be found so return everything
    if (position < 0){
        return state;
    }
    //copy the array in question AND replace the node object in question
    state.Nodes = state.Nodes.slice();
    //copy over the node
    state.Nodes[position] = Object.assign({}, state.Nodes[position], action.Node);

    return state;
}