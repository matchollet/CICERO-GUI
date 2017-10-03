import * as ActionTypes from '../actions/actionTypes.js';

const userReducer = (state = [], action) => {
    let newState;
    switch(action.type){
        case ActionTypes.USER_LOGIN:
            return newState = Object.assign(newState, action.user);
        default:
            return state;
    }
}

export default userReducer;