/**
 * Created by sam on 24/7/17.
 */

export const LOAD_STATE = "LOAD_STATE";

export function loadState(state){
    return {
        type: LOAD_STATE,
        State: state
    };
}

export function reducerLoadState(state, action){
    return Object.assign(state, action.State);
}