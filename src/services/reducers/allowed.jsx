import { IS_ALLOWED_CHANGED } from '../actions/allowed'


const initialIsAllowedState = { isAllowed: false }

export const allowedReducer =(state=initialIsAllowedState, action) => {
    switch(action.type) {
        case IS_ALLOWED_CHANGED: {
            return {
                ...state, isAllowed: action.payload
            }
        }
        default:
            return state
    }
}