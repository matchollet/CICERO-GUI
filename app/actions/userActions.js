/* User Actions */
import * as ActionTypes from './actionTypes.js';

export const userLogin = (user) => {
    return {
        type : ActionTypes.USER_LOGIN,
        user : user
    }
};

