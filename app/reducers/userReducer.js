import * as ActionTypes from '../actions/actionTypes.js';

const userReducer = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.USER_LOGIN:
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
}

export default userReducer;