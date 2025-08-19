import { ORDER_PLACEMENT_SUCCESSFULL, ORDER_PLACEMENT_FAILED } from '../actions/order'


const initialOrderState = { orderData: null, error: null }


export const orderReducer = (state=initialOrderState, action) => {
    switch(action.type) {
        case ORDER_PLACEMENT_SUCCESSFULL: {
            return {...state, orderData: action.payload}
        }
        case ORDER_PLACEMENT_FAILED: {
            return {...state, error: action.payload}
        }
        default:
            return state
    }
}
