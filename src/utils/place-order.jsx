import { ORDER_PLACEMENT_SUCCESSFULL, ORDER_PLACEMENT_FAILED } from '../services/actions/order'


const YA_API_POST_URL = 'https://norma.nomoreparties.space/api/orders'

export default function placeOrder(ingredients) {
    return async function(dispatch) {
        try {
            const response = await fetch(YA_API_POST_URL, {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(ingredients)})

            if (!response.ok) {
                throw new Error('Failed to place order.');
            }

            const response_data = await response.json()

            dispatch({type: ORDER_PLACEMENT_SUCCESSFULL, payload: response_data})
        } catch(error) {
            dispatch({type: ORDER_PLACEMENT_FAILED, payload: error.message})
        }
    }
}