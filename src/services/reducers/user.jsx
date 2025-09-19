import { USER_CHANGED, USER_RETRIEVED } from '../actions/user'


const initialUserState = { user: null, retrieved: false }

export function userReducer(state = initialUserState, action) {
    switch(action.type) {
        case USER_CHANGED: {
            return {...state, user: action.payload}
        }
        case USER_RETRIEVED: {
            return {...state, retrieved: action.payload}
        }
        default:
            return state
    }
}
