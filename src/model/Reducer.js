/**
 * Created by sam on 6/7/17.
 */

import {ADD_CHARACTER} from './ActionsCharacter.js';
import {createDefaultState} from './DefaultStates';

export default function CharacterReducers(state, action) {
    if (typeof state === 'undefined'){
        return createDefaultState();
    }
    //now we do our cases!
    console.log(state);
    switch (action.type) {
        case ADD_CHARACTER:
        {
            action.Character.ID = state.RunningID;
            return {
                ...state,
                RunningID: state.RunningID+1,
                Characters: [...state.Characters, action.Character]
            }
        }
    }

    return state;
}