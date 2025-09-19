import { USER_CHANGED } from '../services/actions/user'
import { checkResponse } from './check-response'


export default function changeUser(url, method, body, token=null) {
    return async function(dispatch) {
        const headers = { 'Content-Type': 'application/json' }

        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }

        try {
            const response_data = await fetch(
                url,
                {
                    method: method,
                    headers: headers,
                    body: JSON.stringify(body)
                }
            ).then(
                checkResponse
            )

            dispatch({type: USER_CHANGED, payload: response_data.user})

            return response_data

        } catch(error) {
            throw error
        }
    }
}