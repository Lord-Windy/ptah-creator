/**
 * Created by sam on 6/7/17.
 */

import {ADD_CHARACTER, REMOVE_CHARACTER} from './ActionsCharacter.js';
import {ADD_NODE, EDIT_NODE} from "./ActionsNode.js"
import {LOAD_STATE} from "./ActionsState.js"
import {reducerLoadState} from "./ActionsState.js"
import {reducerAddCharacter} from './ActionsCharacter.js'
import {reducerAddNode, reducerEditNode} from "./ActionsNode.js"
import {createDefaultState} from './DefaultStates.js';

export function assignID(state){
    let ID = state.RunningID;
    state.RunningID += 1;
    return ID;
}

export default function Reducer(state, action) {
    if (typeof state === 'undefined'){
        return createDefaultState();
    }
    console.log(action);
    let newState = Object.assign({}, state);
    //now we do our cases!
    switch (action.type) {
        case ADD_CHARACTER:
            return reducerAddCharacter(newState, action);
        case ADD_NODE:
            return reducerAddNode(newState, action);
        case EDIT_NODE:
            return reducerEditNode(newState, action);
        case LOAD_STATE:
            return reducerLoadState(newState, action);
        default:
            return state;
            break;
    }

    return state;
}