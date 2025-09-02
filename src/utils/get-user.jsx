import { checkResponse } from './check-response'
import { USER_CHANGED } from '../services/actions/user'
import { BASE_YA_API_URL } from '../config'


export function getUser(token) {
    const url = `${BASE_YA_API_URL}auth/user`

    return async function (dispatch) {
    
        try {
            const response_data = await fetch(url, {headers: {Authorization: `Bearer ${token}`}}).then(checkResponse)

            dispatch({type: USER_CHANGED, payload: response_data.user});
        }
        catch (error) {
          throw error
        }
    };
}