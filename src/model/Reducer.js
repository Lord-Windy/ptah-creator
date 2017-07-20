/**
 * Created by sam on 6/7/17.
 */

import {ADD_CHARACTER, REMOVE_CHARACTER} from './ActionsCharacter.js';
import {reducerAddCharacter} from './ActionsCharacter.js'
import {createDefaultState} from './DefaultStates';

export function assignID(state){

    let ID = state.RunningID;
    state.RunningID += 1;
    return ID;
}

export default function CharacterReducers(state, action) {
    if (typeof state === 'undefined'){
        return createDefaultState();
    }
    //now we do our cases!
    console.log(state);
    switch (action.type) {
        case ADD_CHARACTER:
            return reducerAddCharacter(Object.assign({}, state), action);
    }

    return state;
}