import { USER_CHANGED } from '../actions/user'


const initialUserState = { user: null }

export function userReducer(state = initialUserState, action) {
    switch(action.type) {
        case USER_CHANGED: {
            return {...state, user: action.payload}
        }
        default:
            return state
    }
}
