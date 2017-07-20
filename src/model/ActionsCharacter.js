/**
 * Created by sam on 6/7/17.
 */

import {assignID} from './Reducer.js'

// AddCharacter -> Action = {type: ADD_CHARACTER, Character: an object}
export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const EDIT_CHARACTER = "EDIT_CHARACTER";

export const CHARACTER_ADD_VALUE = "CHARACTER_ADD_VALUE";
export const CHARACTER_EDIT_VALUE = "CHARACTER_EDIT_VALUE";


export default function addCharacter(character) {
    return {
        type: ADD_CHARACTER,
        Character: character
    };
}

export function reducerAddCharacter(state, action) {
    action.Character.ID = assignID(state);
    state.Characters.push(action.Character);
    return state;
}