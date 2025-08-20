import { ORDER_PLACEMENT_SUCCESSFULL, ORDER_PLACEMENT_FAILED } from '../services/actions/order'
import { BASE_YA_API_URL } from '../config'
import { checkResponse } from './check-response'


const YA_API_POST_URL = `${BASE_YA_API_URL}orders`

export default function placeOrder(ingredients) {
    return async function(dispatch) {
        try {
            const response = await fetch(
                YA_API_POST_URL,
                {method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ingredients)}
            ).then(
                checkResponse
            )

            const response_data = await response.json()

            dispatch({type: ORDER_PLACEMENT_SUCCESSFULL, payload: response_data})
        } catch(error) {
            dispatch({type: ORDER_PLACEMENT_FAILED, payload: error.message})
        }
    }
}
