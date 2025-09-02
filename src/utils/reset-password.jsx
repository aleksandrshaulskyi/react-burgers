import { BASE_YA_API_URL } from '../config'
import { checkResponse } from './check-response'
import { IS_ALLOWED_CHANGED } from '../services/actions/allowed'


export function resetPassword(body) {
    return async function (dispatch) {

        const url = `${BASE_YA_API_URL}password-reset/reset`

        try {
            await fetch(
                url,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }
            ).then(checkResponse)

            dispatch({type: IS_ALLOWED_CHANGED, payload: false})
        }
        catch(error) {
            throw error
        }
    }
}
